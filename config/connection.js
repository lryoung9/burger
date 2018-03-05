// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "mysql://:@us-cdbr-iron-east-05.cleardb.net/heroku_55b34a546327285?reconnect=true",
  user: "b57976bd9e69f1",
  password: "2a652b20",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;