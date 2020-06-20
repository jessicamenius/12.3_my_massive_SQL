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

// make the connection

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
});

app.get("/", (req, res) => {
  console.log("api hit");

  connection.query("SELECT * FROM todos", (err, data) => {
    if (err) {
      console.log(err);
    }

    console.log(data);
    res.json(data);
  });
});

app.listen(PORT, () => {
  console.log(`listening at: http://localhost:${PORT}`);
});
