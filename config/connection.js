// Set up MySQL connection.
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
  })
}

var connection = mysql.createConnection({
  port: 3306,
  host: "gp96xszpzlqupw4k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "c9hvguwbu0vq7ea0",
  password: "nu537jdefrwsmunb",
  database: "pjy7sornol0m671a"
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