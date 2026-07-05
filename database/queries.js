const pool = require("../config/db");

async function saveExecution(data) {

    const query = `

        INSERT INTO executions
        (workflow_id,vendor,status,request,response,execution_time)

        VALUES($1,$2,$3,$4,$5,$6)

    `;

    await pool.query(query, [

        data.workflowId,

        data.vendor,

        data.status,

        data.request,

        data.response,

        data.executionTime

    ]);

}

module.exports = {

    saveExecution

};