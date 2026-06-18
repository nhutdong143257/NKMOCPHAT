const jwt = require("jsonwebtoken");
const { sql } = require("../config/db");

const login = async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const { username, password } = req.body;

    const result = await sql.query`
      SELECT * FROM dbo.Users
      WHERE username = ${username}
      AND password = ${password}
    `;

    console.log("SQL RESULT:", result.recordset);

    if (result.recordset.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Sai tài khoản hoặc mật khẩu",
      });
    }

    const user = result.recordset[0];

    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
      },
      "SECRET_KEY_123",
      { expiresIn: "1h" }
    );

    return res.json({
      success: true,
      accessToken: token,
      user,
    });
  } catch (err) {
    console.log("LOGIN ERROR:", err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = { login };