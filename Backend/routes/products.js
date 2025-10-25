import express from "express";
const router = express.Router();

// Sample product data
let products = [
  { id: 1, name: "T-shirt", price: 20 },
  { id: 2, name: "Jeans", price: 40 },
];

// GET all products
router.get("/", (req, res) => {
  res.json(products);
});

// GET single product
router.get("/:id", (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

// POST new product
router.post("/", (req, res) => {
  const newProduct = { id: products.length + 1, ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

export default router;
