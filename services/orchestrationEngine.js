const { mapRequest } = require("./mappingService");
const { callVendor } = require("./vendorService");
const { transformResponse } = require("../utils/transformer");
const { logExecution } = require("../utils/logger");
async function execute(clientRequest, apiConfig) {

    const workflowResults = [];

    for (const step of apiConfig.workflow) {

        // Map request for current vendor
        const mappedRequest = mapRequest(
            clientRequest,
            step.mapping
        );
       // Start timer
const startTime = Date.now();

// Call current vendor
const vendorResponse = await callVendor(
    step,
    mappedRequest
);

// Stop timer
const executionTime = Date.now() - startTime;

        const unifiedResponse = transformResponse(
    vendorResponse.response,
    step.transform
);

await logExecution({

    workflow: apiConfig.name,

    endpoint: apiConfig.endpoint,

    vendor: step.vendor,

    request: mappedRequest,

    response: unifiedResponse,

    status: vendorResponse.success ? "SUCCESS" : "FAILED",

    executionTime: executionTime,

    error: vendorResponse.error || null

});

        // Save execution result
       workflowResults.push({
    vendor: step.vendor,
    mappedRequest,
    unifiedResponse
});
    }

    return {
        success: true,
        endpoint: apiConfig.endpoint,
        workflowResults
    };
}

module.exports = {
    execute
};