// Dependencies
// ==========================
var mysql = require('mysql');
var connection; // initializing a connection variable to allow for access in orm.js file

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: "burgers_db"
  });
};

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

// attaches the connection variable containing methods initializing a connection to the burgers_db databse to the module.exports object
module.exports = connection;
