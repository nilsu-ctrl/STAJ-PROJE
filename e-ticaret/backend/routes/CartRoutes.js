const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

router.post("/", async (req, res) => {
  try {
    const { productId } = req.body;

    const existingItem = await Cart.findOne({ product: productId });

    if (existingItem) {
      existingItem.quantity += 1;
      await existingItem.save();

      return res.status(200).json(existingItem);
    }

    const newItem = await Cart.create({
      product: productId,
      quantity: 1,
    });

    res.status(201).json(newItem);

  } catch (error) {
    res.status(500).json({
      message: "Sepete eklenemedi",
      error: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const cart = await Cart.find().populate("product");

    res.status(200).json(cart);

  } catch (error) {
    res.status(500).json({
      message: "Sepet alınamadı",
      error: error.message,
    });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const deletedItem = await Cart.findByIdAndDelete(req.params.id);

    if (!deletedItem) {
      return res.status(404).json({
        message: "Sepet ürünü bulunamadı",
      });
    }

    res.status(200).json({
      message: "Ürün sepetten kaldırıldı",
    });

  } catch (error) {
    res.status(500).json({
      message: "Silme işlemi başarısız",
      error: error.message,
    });
  }
});
router.delete("/", async (req, res) => {
  try {
    await Cart.deleteMany({});

    res.status(200).json({
      message: "Sepet temizlendi",
    });

  } catch (error) {
    res.status(500).json({
      message: "Sepet temizlenemedi",
      error: error.message,
    });
  }
});
module.exports = router;