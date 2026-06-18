const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db");

const dashboardRoutes = require("./routes/dashboard.routes"); // 👈 ĐƯA LÊN TRÊN
const productRoutes = require("./routes/product.routes");
const postRoutes = require("./routes/post.routes");
const authRoutes = require("./routes/auth.routes");
const categoryRoutes = require("./routes/category.routes");

const app = express();

app.use(cors());
app.use(express.json());

// LOG
app.use((req, res, next) => {
  console.log("", req.method, req.url);
  next();
});

connectDB();

// 🔥 ROUTES (dashboard phải đứng đầu)
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/products", productRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);

app.use("/uploads", express.static("uploads"));

app.listen(5000, () => {
  console.log("🚀 Server running at http://localhost:5000");
});