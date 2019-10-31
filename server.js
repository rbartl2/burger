var express = require("express");
var expressHandlebars = require("express-handlebars");

var app = express();

app.use(express.static(__dirname + '/public'));

// Sets up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set up port
var PORT = process.env.PORT || 8080;
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
})
