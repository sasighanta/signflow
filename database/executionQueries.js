const pool = require("../config/db");

async function saveExecution(log) {

    const query = `
        INSERT INTO public.execution_logs
        (
            workflow_name,
            endpoint,
            vendor,
            request,
            response,
            status,
            execution_time,
            error_message
        )
        VALUES($1,$2,$3,$4,$5,$6,$7,$8)
    `;

    await pool.query(query, [
        log.workflow,
        log.endpoint,
        log.vendor,
        log.request,
        log.response,
        log.status,
        log.executionTime,
        log.error || null
    ]);
}

async function getExecutionHistory() {

    const query = `
        SELECT
            id,
            workflow_name,
            endpoint,
            vendor,
            status,
            execution_time,
            created_at
        FROM public.execution_logs
        ORDER BY created_at DESC
    `;

    const result = await pool.query(query);

    return result.rows;
}

module.exports = {
    saveExecution,
    getExecutionHistory
};