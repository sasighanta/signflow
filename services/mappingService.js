function mapRequest(clientRequest, mapping) {
    const vendorRequest = {};

    Object.entries(mapping).forEach(([clientField, vendorField]) => {
        vendorRequest[vendorField] = clientRequest[clientField];
    });

    return vendorRequest;
}

module.exports = {
    mapRequest
};