function getNestedValue(obj, path) {
    return path.split(".").reduce((value, key) => {
        return value ? value[key] : undefined;
    }, obj);
}

function transformResponse(vendorResponse, transformConfig) {

    const transformed = {};

    Object.entries(transformConfig).forEach(([key, path]) => {
        transformed[key] = getNestedValue(vendorResponse, path);
    });

    return transformed;
}

module.exports = {
    transformResponse
};