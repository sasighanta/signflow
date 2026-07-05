function validateRequest(requiredFields) {

    return (req, res, next) => {

        const missingFields = [];

        requiredFields.forEach(field => {
            if (
                req.body[field] === undefined ||
                req.body[field] === null ||
                req.body[field] === ""
            ) {
                missingFields.push(field);
            }
        });

        if (missingFields.length > 0) {
            return res.status(400).json({
                success: false,
                message: "Validation Failed",
                missingFields
            });
        }

        next();
    };

}
function validateRequest(requiredFields) {
  return (req, res, next) => {

    console.log("Validation Middleware Executed");

    const missingFields = [];

    requiredFields.forEach(field => {
      if (
        req.body[field] === undefined ||
        req.body[field] === null ||
        req.body[field] === ""
      ) {
        missingFields.push(field);
      }
    });

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Validation Failed",
        missingFields
      });
    }

    next();
  };
}

module.exports = validateRequest;