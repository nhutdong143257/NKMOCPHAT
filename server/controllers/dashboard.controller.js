const { sql } = require("../config/db");

const getStats = async (req, res) => {
  try {
    const result = await sql.query(`
      SELECT 
        (SELECT COUNT(*) FROM Products) AS total_products,
        (SELECT COUNT(*) FROM Posts) AS total_posts,
        (SELECT COUNT(*) FROM Users) AS total_users
    `);

    res.json(result.recordset[0]);
  } catch (err) {
    console.log("❌ DASHBOARD ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getStats };