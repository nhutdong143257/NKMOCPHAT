const express = require("express");
const router = express.Router();

const upload = require("../middlewares/upload");


const {
  getAllPosts,
  getPostById,
  getPostBySlug,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/post.controller");

// ================= ROUTES =================

router.get("/slug/:slug", getPostBySlug);

router.get("/", getAllPosts);
router.get("/:id", getPostById);

router.post("/", upload.single("thumbnail"), createPost);
router.put("/:id", upload.single("thumbnail"), updatePost);
router.delete("/:id", deletePost);

module.exports = router;