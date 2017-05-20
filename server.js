//Dependencies
//=======================
var express = require('express');

//Create server variables
//=======================
var app = express();
var port = 8080;

require("./controllers/burgers_controller.js");

//Initialize server to listen to specific port
//=======================
app.listen(port, function() {
  console.log("Now listening to port: " + port);
});
