// Dependencies
//==========================
var mysql = require('mysql');

var connection = require("./connection.js"); //import file intializing conenction to mysql database

// Initialize orm object
//==========================
var orm = {
  // method that grabs all columns from table burgers
  selectAll: function(cb) {
    connection.query("SELECT * FROM burgers", function(err, data) {
      // push into array of objects
      if(err) throw err;
      return cb(data);
    });
  },

  // method that inserts a new burger in the burgers table with a default FALSE('uneaten') devoured value
  insertOne: function(burger_name, cb) {
    connection.query("INSERT INTO burgers SET ?",
    {
      burger_name: burger_name,
      devoured: 0
    }, function(err, data) {
        if(err) throw err;
        return cb(data);
    });
  },

  // method that updates one burger in the table matching a selected ID and changing the devoured value to TRUE('eaten')
  updateOne: function(chosenId, cb) {
    connection.query("UPDATE burgers SET ? WHERE ? ",
    [{
      devoured: 1,
    },
    {
      id: chosenId
    }], function(err, data) {
      // push into array of objects
      return cb(data);
    });
  }
}

// attaches the orm object containing mysql methods to module.exports object
module.exports = orm;
