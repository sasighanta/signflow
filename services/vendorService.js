const axios = require("axios");

async function callVendor(vendorConfig, payload) {

    const MAX_RETRIES = 3;

    let attempt = 0;

    while (attempt < MAX_RETRIES) {

        try {

            const response = await axios.post(
                vendorConfig.url,
                payload,
                {
                    timeout: 5000
                }
            );

            return {
                success: true,
                vendor: vendorConfig.vendor,
                response: response.data,
                attempts: attempt + 1
            };

        } catch (err) {

            attempt++;

            if (attempt >= MAX_RETRIES) {

                return {
                    success: false,
                    vendor: vendorConfig.vendor,
                    error: err.message,
                    attempts: attempt
                };

            }

        }

    }

}

module.exports = {
    callVendor
};