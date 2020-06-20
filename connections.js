const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "NugPup28@",
  database: "todo_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
});

module.exports = connection;
