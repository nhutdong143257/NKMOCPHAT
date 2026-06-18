const express = require("express");
const router = express.Router();

const { getStats } = require("../controllers/dashboard.controller");

// test log
router.get("/stats", (req, res, next) => {
  console.log("👉 DASHBOARD STATS HIT");
  next();
}, getStats);

module.exports = router;