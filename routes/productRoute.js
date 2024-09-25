import express from "express";
const router = express.Router();
import Product from "../models/productModel.js";

import {
  createNewItem,
  deleteProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
} from "../controllers/productController.js";

router.get("/", getProducts);
router.get("/:id", getSingleProduct);
router.post("/", createNewItem);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
