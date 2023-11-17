const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();
console.log(process.env.MYSQL_HOST);
console.log(process.env.MYSQL_USER);
console.log(process.env.MYSQL_PASSWORD);
console.log(process.env.MYSQL_DATABASE);

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "a",
//     database: "test",
//     multipleStatements: true
// });

var con = mysql.createConnection({
  host: "localhost",
  // host: process.env.MYSQL_HOST,
  user: "root",
  // user: process.env.MYSQL_USER,
  password: "rudr1234@nsh",
  // password: process.env.MYSQL_PASSWORD,
  database: "test",
  // database: process.env.MYSQL_DATABASE,
  multipleStatements: true,
});

con.connect(function (err) {
  if (err)
    return console.log(
      "Failed to connect to mysql server/ database ... 🔴",
      err
    );
  else return console.log("Successfully Connected with the Database ... 🟢");
});

module.exports = con;
