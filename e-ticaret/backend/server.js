const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const ProductRoutes = require("./routes/ProductRoutes");
const CartRoutes = require("./routes/CartRoutes");
const authRoutes = require("./routes/auth");
dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/products", ProductRoutes);
app.use("/api/cart", CartRoutes);




mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB'ye bağlanıldı"))
  .catch((err) => console.error("MongoDB bağlantı hatası:", err));

app.get("/", (req, res) => {
  res.send("Backend çalışıyor");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});