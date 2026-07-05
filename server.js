const express = require('express');
const cors = require('cors');
const dynamicRoutes = require('./routes/dynamicRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./config/swagger.json');
const executionRoutes = require("./routes/executionRoutes");

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use("/api", dynamicRoutes);
app.use("/api", executionRoutes);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Signflow running on port ${PORT}`);
});