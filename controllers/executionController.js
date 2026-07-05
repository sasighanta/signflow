const { getExecutionHistory } = require("../database/executionQueries");

exports.getExecutions = async (req, res) => {

    try {

        const executions = await getExecutionHistory();

        res.json({
            success: true,
            count: executions.length,
            data: executions
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err.message
        });

    }

};