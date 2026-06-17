# Store Rating Platform

## Overview

Store Rating Platform is a full-stack web application that allows users to browse stores and submit ratings. The platform supports role-based access control with three user roles:

* Admin
* Store Owner
* User

The application is built using React, TypeScript, Express.js, Prisma ORM, and PostgreSQL.

---

## Features

### Admin

* Login
* View dashboard statistics
* Create Store Owners
* View all users
* View all stores

### Store Owner

* Login
* Create a store
* View store analytics
* View average rating received
* View total ratings received

### User

* Register account
* Login
* Browse stores
* Submit ratings
* Update existing ratings
* View store ratings

---

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* React Router DOM
* Axios

### Backend

* Node.js
* Express.js
* TypeScript
* Prisma ORM
* PostgreSQL
* JWT Authentication
* Zod Validation

---

## Project Structure

StoreRatingPlatform/

├── backend/

│   ├── src/

│   ├── prisma/

│   └── package.json

│

├── frontend/

│   ├── src/

│   └── package.json

│

└── README.md

---

## Installation

### Clone Repository

git clone <repository-url>

cd StoreRatingPlatform

---

### Backend Setup

cd backend

npm install

Create .env file

DATABASE_URL=your_postgresql_connection_string

JWT_SECRET=your_secret_key

Run migrations

npx prisma migrate dev

Start backend

npm run dev

Backend runs on:

http://localhost:5000

---

### Frontend Setup

cd frontend

npm install

npm run dev

Frontend runs on:

http://localhost:5173

---

## Authentication

The application uses JWT-based authentication.

After successful login, a JWT token is generated and stored in localStorage.

Protected routes are implemented based on user roles.

---

## Database

The application uses PostgreSQL with Prisma ORM.

Main entities:

* User
* Store
* Rating

Relationships:

User → Store Owner → Store

User → Rating → Store

---

## Validation

Input validation is implemented using Zod.

Validation includes:

* Email validation
* Password validation
* Rating range validation
* Store information validation

---

## Security

* JWT Authentication
* Password Hashing
* Protected Routes
* Role-Based Authorization
* Input Validation

---

## Future Enhancements

* Search and filter stores
* Pagination
* Profile management
* Password reset
* Responsive mobile UI
* Store images

---

## Author

Anjali Joshi

