const { sql } = require("../config/db");

// GET ALL
const getAllPosts = async (req, res) => {
  try {
    const result = await sql.query("SELECT * FROM Posts");
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET BY ID
const getPostById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await sql.query`
      SELECT * FROM Posts WHERE id = ${id}
   `;

    res.json(result.recordset[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CREATE
const createPost = async (req, res) => {
  try {
    const { title, slug, content, category } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        error: "Thiếu dữ liệu",
      });
    }

    const thumbnail = req.file
      ? `http://localhost:5000/uploads/${req.file.filename}`
      : null;

    await sql.query`
      INSERT INTO Posts (title, slug, content, thumbnail, category, created_at)
      VALUES (${title}, ${slug}, ${content}, ${thumbnail}, ${category}, GETDATE())
    `;

    res.json({ message: "Created post" });
  } catch (err) {
    console.error("CREATE POST ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, slug, content, category } = req.body;

    const thumbnail = req.file
      ? `http://localhost:5000/uploads/${req.file.filename}`
      : null;

    await sql.query`
      UPDATE Posts
      SET 
        title = ${title},
        slug = ${slug},
        content = ${content},
        category = ${category},
        thumbnail = COALESCE(${thumbnail}, thumbnail)
      WHERE id = ${id}
    `;

    res.json({ message: "Updated post" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    await sql.query`
      DELETE FROM Posts WHERE id = ${id}
    `;

    res.json({ message: "Deleted post" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET BY SLUG
const getPostBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const result = await sql.query`
      SELECT * FROM Posts WHERE slug = ${slug}
    `;

    if (result.recordset.length === 0) {
      return res.status(404).json({ message: "Không tìm thấy bài viết" });
    }

    res.json(result.recordset[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  getPostBySlug,
  createPost,
  updatePost,
  deletePost,
};
