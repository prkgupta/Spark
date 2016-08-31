/**
 * Created by Hirad on 8/14/2016.
 */
var express     = require('express');
var app         = express();
var bodyParser  = require("body-parser");
var path        = require("path");

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

// hw3 routes
app.get("/movies", function(req,res){
   res.send("Movies route is working");
});

// // Serve static files
// app.use(express.static('./public'));

app.get("/movies/new", function (req,res) {
    //res.sendFile(path.join(__dirname.substring(0,__dirname.length - 2) + "moviesForm.ejs"));
    //res.render("/var/www/html/moviesForm.ejs");
    res.render("../public/moviesForm.ejs");
});

app.post("/movies", function(req,res){
    var title     = req.body.title;
    var studio    = req.body.studio;
    var year      = req.body.year;
    var boxOffice = req.body.boxOffice;
    var poster    = req.body.poster;
    var problem   = false;

    //data validation TODO
    if(year.length != 4 || isNaN(year))
        res.send("Please input a 4-digit number for year.");

    if(isNaN(boxOffice))
        res.send("Please input a number for boxOffice. (With no $)");

    res.redirect("/movies");
});

app.listen(8000,'198.199.116.102',function () {
    console.log("Server is running");
});
