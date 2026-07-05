const express = require("express");

const router = express.Router();

const executionController = require("../controllers/executionController");

router.get(
    "/executions",
    executionController.getExecutions
);

module.exports = router;