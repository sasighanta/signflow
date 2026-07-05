const orchestrationEngine = require("../services/orchestrationEngine");

exports.execute = async (req, res, apiConfig) => {

    try {

        const result = await orchestrationEngine.execute(
            req.body,
            apiConfig
        );

        return res.json(result);

    } catch (err) {

        return res.status(500).json({
            success: false,
            error: err.message
        });

    }

};