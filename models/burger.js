var orm = require("../config/orm.js");

var burger = {

  all: function(cb) {
    orm.selectAll("burgers", function(result) {
      cb(result);
    });
  },

  add: function(vals, cb) {
    orm.insertOne("burgers", ["burger_name", "devoured"], vals, function(data) {
      cb(data);
    });
  },

  update: function(id, cb) {
    orm.updateOne("burgers", "devoured", "TRUE", id, function(result) {
      cb(result);
    });
  }

}

module.exports = burger;
