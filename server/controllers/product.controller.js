const { sql } = require("../config/db");

// GET ALL (JOIN CATEGORY)
const getAllProducts = async (req, res) => {
  try {
    const result = await sql.query(`
      SELECT p.*, c.name AS category_name
      FROM Products p
      LEFT JOIN Categories c ON p.category_id = c.id
    `);

    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET BY ID
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    // 🔥 CHẶN nếu không phải số
    if (isNaN(id)) {
      return res.status(400).json({ error: "ID không hợp lệ" });
    }

    const result = await sql.query`
      SELECT p.*, c.name AS category_name
      FROM Products p
      LEFT JOIN Categories c ON p.category_id = c.id
      WHERE p.id = ${id}
    `;

    res.json(result.recordset[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CREATE (DÙNG category_id)
const createProduct = async (req, res) => {
  try {
    const {
      name,
      slug,
      description,
      short_description,
      category_id,
      is_featured,
    } = req.body;

    const thumbnail = req.file
      ? `http://localhost:5000/uploads/${req.file.filename}`
      : null;

    await sql.query`
      INSERT INTO Products 
      (name, slug, description, short_description, thumbnail, category_id, is_featured)
      VALUES 
      (${name}, ${slug}, ${description}, ${short_description}, ${thumbnail}, ${category_id}, ${is_featured})
    `;

    res.json({ message: "Created product" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE (FULL FIELD + category_id)
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      slug,
      description,
      short_description,
      thumbnail,
      category_id,
      is_featured,
    } = req.body;

    await sql.query`
      UPDATE Products
      SET 
        name = ${name},
        slug = ${slug},
        description = ${description},
        short_description = ${short_description},
        thumbnail = ${thumbnail},
        category_id = ${category_id},
        is_featured = ${is_featured},
        updated_at = GETDATE()
      WHERE id = ${id}
    `;

    res.json({ message: "Updated product" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    await sql.query`
      DELETE FROM Products WHERE id = ${id}
    `;

    res.json({ message: "Deleted product" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// SEARCH
const searchProducts = async (req, res) => {
  try {
    const { q } = req.query;

    console.log("KEYWORD:", q);

    if (!q) return res.json([]);

    const result = await sql.query`
      SELECT TOP 10 *
      FROM Products
      WHERE name LIKE ${"%" + q + "%"}
    `;

    res.json(result.recordset);
  } catch (err) {
    console.error("SEARCH ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
};
