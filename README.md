## Table of Contents

- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)

---

## Setup and Installation

### Prerequisites

- Node.js
- PostgreSQL
- Prisma

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/bhargavtenali/be-commerce.git
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
