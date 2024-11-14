const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.post("/", productController.createProduct);
router.put("/:id", productController.updateProduct);
router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.get("/page/:page", productController.getPaginatedProducts);

module.exports = router;
