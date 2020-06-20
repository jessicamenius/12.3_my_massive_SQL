const mysql = require("mysql");
const express = require("express");
const PORT = 3000;
const app = express();

// set up connection data

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "NugPup28@",
  database: "todo_db",
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
});

app.listen(PORT, () => {
  console.log(`listening at: http://localhost:${PORT}`);
});
