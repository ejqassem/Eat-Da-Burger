var connection = require('./connection');

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

var orm = {

  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM " + table;
    var query = connection.query(queryString, function(err, result) {
      cb(result);
    });
  },

  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString +=  printQuestionMarks(vals.length);
    queryString += ")";
    var query = connection.query(queryString, vals, function(err, result) {
      console.log(query.sql);
      if(err) throw err;
      var data = result;
      cb(data);
    });
  },

  updateOne: function(table, cols, newColVal, id, cb) {
    var queryString = "UPDATE " + table;
    queryString += " SET " + cols.toString();
    queryString += " = " + newColVal;
    queryString += " WHERE id = " + id;
    var query = connection.query(queryString, function(err, result) {
      cb(result);
    });
  }

}

module.exports = orm;
