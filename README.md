# CampusCrate

CampusCrate is a college lost-and-found platform built with React + Vite frontend and Express + MongoDB backend.

## Project setup

1. Install dependencies
   - Frontend: `cd frontend && npm install`
   - Backend: `cd backend && npm install`

2. Create environment files
   - Copy `backend/.env.example` to `backend/.env`
   - Copy `frontend/.env.example` to `frontend/.env`

3. Update values in `.env` files if needed
   - Backend: MongoDB URI, JWT secrets, CORS origin
   - Frontend: API URL (default: `http://localhost:5000`)

4. Start the app
   - Backend: `cd backend && npm run dev`
   - Frontend: `cd frontend && npm run dev`

5. Open the app
   - Frontend: `http://localhost:5173`
   - Backend health: `http://localhost:5000/api/v1/health`

## Notes for submission

- Real `.env` files are intentionally ignored by Git.
- Only example files like `.env.example` should be committed.
- Do not share actual credentials, JWT secrets, or MongoDB connection strings in the repository.

## Default local configuration

Backend `.env` should usually contain values similar to:

```env
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
MONGODB_URI=mongodb://127.0.0.1:27017/campuscrate
JWT_SECRET=your_secret_key_here
JWT_EXPIRES_IN=7d
REFRESH_TOKEN_SECRET=your_refresh_secret_here
REFRESH_TOKEN_EXPIRES_IN=30d
COOKIE_SECRET=your_cookie_secret_here
```

Frontend `.env` should usually contain:

```env
VITE_API_URL=http://localhost:5000
```
