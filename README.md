# Express Server with Prisma

This project is a RESTful API server built with [Express.js](https://expressjs.com/) and [Prisma](https://www.prisma.io/) ORM. It manages product data with a relational database, structured using controllers, routes, and middleware for clear separation of concerns and easy maintenance.

## Table of Contents

- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)

---

## Project Structure

```
project-root/
├── prisma/                   # Prisma schema and migrations
│   ├── migrations/           # Database migration files
│   └── schema.prisma         # Prisma schema definition
├── controllers/              # Contains business logic for each route
│   └── productController.js  # Product-specific operations
├── models/                   # Database models and connections
│   └── prismaClient.js       # Prisma client initialization
├── routes/                   # Route definitions for API endpoints
│   └── productRoutes.js      # Routes for product API
├── middlewares/              # Custom middleware functions
│   └── errorHandler.js       # Error-handling middleware
├── server.js                 # Main application entry point
└── package.json              # Dependencies and scripts
```

- **`controllers/`**: Contains controller functions to handle business logic for each route.
- **`models/`**: Houses Prisma client initialization to interact with the database.
- **`routes/`**: Defines route paths and links them to controller functions.
- **`middlewares/`**: Holds reusable middleware, like error handling.
- **`server.js`**: Initializes the Express app, applies middleware, sets up routes, and starts the server.

## Setup and Installation

### Prerequisites

- Node.js (v14 or later)
- PostgreSQL or other Prisma-supported database
- Prisma CLI: `npm install -g prisma`

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd project-root
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Prisma:**

   Update `DATABASE_URL` in your `.env` file with your database connection string.

   ```plaintext
   DATABASE_URL="postgresql://username:password@localhost:5432/dbname?schema=public"
   ```

4. **Generate Prisma Client:**

   ```bash
   npx prisma generate
   ```

5. **Start the Server:**

   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000`.

---

## Environment Variables

Ensure the following variables are defined in a `.env` file:

- **`DATABASE_URL`**: Connection string for the database.

Example:

```plaintext
DATABASE_URL="postgresql://username:password@localhost:5432/dbname?schema=public"
```

---

## API Endpoints

All endpoints return JSON responses and follow RESTful conventions.

### Products

- **Create Product**

  - **POST** `/products`
  - Body: `{ title, price, discountPercentage, inventory, ... }`

- **Update Product**

  - **PUT** `/products/:id`
  - Body: `{ title, price, discountPercentage, inventory, ... }`

- **Get All Products**

  - **GET** `/products`

- **Get Single Product by ID**

  - **GET** `/products/:id`

- **Get Paginated Products**
  - **GET** `/products/page/:page`

---
