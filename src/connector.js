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

// var con = mysql.createConnection({
//   host: "4ms.h.filess.io",
//   user: "ZomatoProject_stemslady",
//   password: "eb8acaddad6248fb0076e5c61ada69c9deb7cade",
//   database: "ZomatoProject_stemslady",
//   //* If you will not use this port it won't connect , so make sure to use the port !!
//   port: "3307",
//   multipleStatements: true,
// });
var con = mysql.createConnection({
  host: "wyy.h.filess.io",
  user: "gauravverma_finecookor",
  password: "910015ca602df02c76bbce0ae1d93e686de8de88",
  database: "gauravverma_finecookor",
  //* If you will not use this port it won't connect , so make sure to use the port !!
  port: "3307",
  multipleStatements: true,
});


// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "rudr1234@nsh",
//   database: "test",
//   multipleStatements: true,
// });

con.connect(function (err) {
  if (err)
    return console.log(
      "Failed to connect to mysql server/ database ... 🔴",
      err
    );
  else return console.log("Successfully Connected with the Database ... 🟢");
});

module.exports = con;
