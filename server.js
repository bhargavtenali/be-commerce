const express = require("express");
const productRoutes = require("./routes/productRoutes");
const errorHandler = require("./middlewares/errorHandler");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Route setup
app.use("/products", productRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
