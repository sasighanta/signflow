#  SignFlow - Low-Code API Orchestration Platform

A Configuration-Driven Low-Code API Orchestration Platform developed as part of the **Signzy Software Development Engineer Internship Assignment**.

The platform enables dynamic API creation, request validation, request transformation, multi-vendor orchestration, response transformation, retry handling, execution logging, and API documentation without changing application code.

---

#  Features

- Dynamic API Creation using JSON Configuration
- Configuration Driven Workflow Engine
- Request Validation Middleware
- Request Mapping Engine
- Multi Vendor API Orchestration
- Response Transformation
- Retry Mechanism
- PostgreSQL Execution Logging
- Execution History API
- Swagger API Documentation
- Modular & Scalable Architecture

---

#  Tech Stack

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL

### API Documentation
- Swagger (OpenAPI 3.0)

### Libraries
- Axios
- pg
- dotenv
- cors
- swagger-ui-express

---

#  Project Structure

```
SignFlow
│
├── config/
├── controllers/
├── database/
├── logs/
├── middleware/
├── mockApis/
├── routes/
├── services/
├── utils/
├── sample-configs/
├── server.js
├── package.json
└── README.md
```

---

#  Workflow

```
Client Request
        │
        ▼
Dynamic Route Loader
        │
        ▼
Validation Middleware
        │
        ▼
Orchestration Engine
        │
 ┌──────┴─────────┐
 ▼                ▼
Vendor A      Vendor B
 │                │
 └──────┬─────────┘
        ▼
Response Transformer
        ▼
Execution Logger
        ▼
PostgreSQL
        ▼
Client Response
```

---

#  APIs

## POST /api/verify-pan

Executes the PAN Verification workflow.

### Sample Request

```json
{
  "pan": "ABCDE1234F",
  "name": "Sasi"
}
```

---

## GET /api/executions

Returns workflow execution history stored in PostgreSQL.

---

#  Swagger

Swagger Documentation

```
http://localhost:3000/api-docs
```

---

# Sample Configurations

The project contains sample workflow configurations for

- PAN Verification
- GST Verification
- Aadhaar Verification

These demonstrate how new workflows can be added without changing backend code.

---

# 🗄 Database

### workflows

Stores workflow definitions.

### execution_logs

Stores

- Workflow Name
- Endpoint
- Vendor
- Request
- Response
- Status
- Execution Time
- Error Message

---

#  Execution Flow

1. Client sends request
2. Validation Middleware validates request
3. Workflow Engine loads configuration
4. Request Mapping transforms payload
5. Vendor Service invokes APIs
6. Response Transformer normalizes response
7. Execution Logger stores execution history
8. Unified response returned to client

---

#  Screenshots

(Add screenshots before submission)

- Swagger UI
- PostgreSQL Execution Logs
- Postman API Response

---

#  Future Enhancements

- API Key Authentication
- Docker Support
- Parallel Workflow Execution
- Workflow UI Builder
- AI Assisted Workflow Generation

---

#  Author

**Sasi Sai Tulasi Ghanta**

Developed for the Signzy SDE Internship Assignment.
