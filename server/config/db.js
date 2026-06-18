const sql = require("mssql");

const config = {
  user: "sa",
  password: "NhutDong14032004@",
  server: "localhost",   // 👈 đổi lại
  port: 1433,            // 👈 bắt buộc
  database: "DTB_NKMOCPHAT",
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

const connectDB = async () => {
  try {
    await sql.connect(config);
    console.log("✅ Connected to SQL Server");
  } catch (err) {
    console.error("❌ DB Error:", err.message);
  }
};

module.exports = { sql, connectDB };