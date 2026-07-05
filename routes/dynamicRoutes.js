const express = require("express");
const router = express.Router();

const { loadConfig } = require("../services/configService");
const orchestrationController = require("../controllers/orchestrationController");
const validateRequest = require("../middleware/validationMiddleware");

const config = loadConfig();

config.apis.forEach((api) => {
  router[api.method.toLowerCase()](
    api.endpoint,
    validateRequest(api.validation.required),
    (req, res) => {
      orchestrationController.execute(req, res, api);
    }
  );
});

module.exports = router;