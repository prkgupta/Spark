/**
 * Created by Hirad on 8/14/2016.
 */
//var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/node", function (req,res) {
    res.render("../home.ejs");
});

app.post("/form", function (req,res){
    var fname = req.body.fname;
    var lname = req.body.lname;
    var color = req.body.color;
    res.render("../form.ejs",{fname:fname, lname:lname, color:color});
});

app.get("/env", function(req,res){
    res.send(process.env);
});
app.listen(8000,'198.199.116.102',function () {
    console.log("Server is running");
});
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     //res.end('Hello Apache!\n');
//
// }).listen(8000, '198.199.116.102');