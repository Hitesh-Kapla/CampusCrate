# CampusCrate Backend API

Production-quality Lost & Found Management System API built with the **MERN** stack (Node.js, Express.js, MongoDB, Mongoose) following Clean Architecture principles.

---

## 🏗️ Architecture Overview

The backend uses a layered architecture separating concerns into:

- **Config**: Application configuration, environment variables, database, and external service setup.
- **Controllers**: Thin request handlers parsing requests and sending HTTP responses.
- **Services**: Encapsulated business logic decoupled from HTTP transport.
- **Models**: Mongoose schemas enforcing data integrity and business rules.
- **Routes**: RESTful API route definitions and endpoint mapping.
- **Middlewares**: Custom request processing (auth, validation, file upload, error handling).
- **Validators**: Input validation chains using `express-validator`.
- **Utils**: Standardized errors (`ApiError`), success payloads (`ApiResponse`), async handlers (`asyncHandler`), loggers, and constants.

---

## 📁 Directory Structure

```text
backend/
├── src/
│   ├── config/          # DB, Cloudinary, and Env configurations
│   ├── controllers/     # Controller handlers (thin wrapper around services)
│   ├── models/          # Mongoose data models
│   ├── routes/          # API route specifications
│   ├── middlewares/     # Auth, Upload, Error, and Validation middlewares
│   ├── validators/      # express-validator schemas
│   ├── services/        # Business logic layer
│   ├── utils/           # Helper classes, error/response handlers, constants
│   ├── uploads/         # Temporary local storage directory for Multer
│   ├── docs/            # Documentation & API specs
│   ├── app.js           # Express app setup (middleware & routes assembly)
│   └── server.js        # Server bootstrapping & database connection entrypoint
├── .env.example         # Template for environment variables
├── .gitignore           # Git ignore rules
├── package.json         # Project metadata and dependencies
└── README.md            # Backend documentation
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB instance (local or MongoDB Atlas)

### Setup Instructions

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment Variables**:
   Copy `.env.example` to `.env` and update configuration values:
   ```bash
   cp .env.example .env
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Run Production Server**:
   ```bash
   npm start
   ```

---

## 🛡️ License

ISC License - Developed for CampusCrate.
