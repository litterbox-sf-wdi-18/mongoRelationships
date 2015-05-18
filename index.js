var express = require("express"),
  bodyParser = require("body-parser"),
  path = require("path")
  db = require("./models");

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.static("bower_components"));

// Users //

//user#index
app.get("/users", function (req, res) {
  //
});

//user#create
app.post("/users", function (req, res) {
  //
});

// Posts //

//post#index
app.get("/users/:id/posts", function (req, res) {
  //
});

//post#create
app.post("/users/:id/posts", function (req, res) {
  //
});