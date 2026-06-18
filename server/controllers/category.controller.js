const { sql } = require("../config/db");

const getAllCategories = async (req, res) => {
  try {
    const result = await sql.query("SELECT * FROM Categories");
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllCategories };