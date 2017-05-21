var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get('/', function(req, res ) {
  burger.all(function(result) {
    var uneaten = [];
    var eaten = [];
    for(var i in result) {
      if(result[i].devoured) {
        eaten.push(result[i]);
      }
      else {
        uneaten.push(result[i]);
      }
    }
    res.render("index", {Uneaten: uneaten, Eaten: eaten});
  });
});

router.post("/", function(req, res) {
  burger.add([req.body.newburger, "0"], function(data) {
    res.redirect("/");
  });
})

router.put("/:id", function(req, res) {
  var id = req.body.eaten;
  burger.update(id, function(result) {
    res.redirect('/');
  });
});

module.exports = router;
