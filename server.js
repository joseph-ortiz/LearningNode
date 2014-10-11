var http = require("http");
var express = require("express");
var app = express();
var server = http.createServer(app);
var controllers = require("./controllers");

controllers.init(app);
app.set("view engine", "jade");

app.use(express.static(__dirname + "/public"));


app.get("/api/users", function(req,res){
	res.set("Content-Type", "application/json");
	res.send({name:"Joe", isValid: true, group: "Admin"});
});

server.listen(3000);
