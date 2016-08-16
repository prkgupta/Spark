/**
 * Created by Hirad on 8/14/2016.
 */
//var http = require('http');
var express = require('express');
var app = express();

app.get("/node", function (req,res) {
    res.render("../home.ejs");
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