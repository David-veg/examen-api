var mysql = require("mysql");

export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "escuela",
  port: 3306,
});
