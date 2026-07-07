const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find({
            category: req.params.category
        });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Ürünler alınamadı",
      error: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, category, imgSrc, description, price } = req.body;

    const newProduct = await Product.create({
      title,
      category,
      imgSrc,
      description,
      price,
    });

    res.status(201).json({
      message: "Ürün başarıyla eklendi",
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Ürün eklenemedi",
      error: error.message,
    });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedProduct);

  } catch (error) {
    res.status(500).json({
      message: "Ürün güncellenemedi",
      error: error.message
    });
  }
});
module.exports = router;