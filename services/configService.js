const fs = require("fs");
const path = require("path");

const CONFIG_PATH = path.join(__dirname, "../config/api-config.json");

function loadConfig() {
    try {
        const raw = fs.readFileSync(CONFIG_PATH, "utf8");
        return JSON.parse(raw);
    } catch (err) {
        throw new Error(`Unable to load API configuration: ${err.message}`);
    }
}

module.exports = {
    loadConfig
};