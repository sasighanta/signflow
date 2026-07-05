const fs = require("fs");
const path = require("path");
const { saveExecution } = require("../database/executionQueries");

const logFile = path.join(__dirname, "../logs/execution.log");

async function logExecution(logData) {

    const logEntry = {
        timestamp: new Date().toISOString(),
        ...logData
    };

    // Write to file
    fs.appendFileSync(
        logFile,
        JSON.stringify(logEntry) + "\n"
    );

    // Write to PostgreSQL
    await saveExecution(logData);
}

module.exports = {
    logExecution
};