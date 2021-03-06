
const mysql = require('mysql');
const chalk = require('chalk');
require("dotenv").config();
let connection;
//This is the Heroku Connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
//This is the connection to local host
connection = mysql.createConnection({
    host: process.env.DB_HOST, 
    port: process.env.DB_PORT,
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
  });
}
connection.connect(function (err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log(chalk.bgGreenBright.black("connected as id " + connection.threadId));
  });
  
  module.exports = connection;