const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");

const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
} = require("../controllers/product.controller");

// SEARCH (đặt trên cùng)
router.get("/search", searchProducts);

// GET ALL
router.get("/", getAllProducts);

// GET BY ID
router.get("/:id", getProductById);

// UPDATE
router.put("/:id", updateProduct);

// DELETE
router.delete("/:id", deleteProduct);

// CREATE
router.post("/", upload.single("thumbnail"), createProduct);

module.exports = router;