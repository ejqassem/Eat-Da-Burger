var orm = require('../config/orm.js');

var burger = {
  add: function(burger_name, cb) {
    orm.insertOne(burger_name, function(data) {
      cb(data);
    });
  },
  all: function(cb) {
    orm.selectAll(function(data) {
      return cb(data);
    });
  },
  update: function(chosenId, cb) {
    orm.updateOne(chosenId, function(data) {
      return cb(data);
    })
  }
}

module.exports = burger;
