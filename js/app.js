/**
 * Created by Hirad on 8/14/2016.
 */
var express     = require('express');
var app         = express();
var bodyParser  = require("body-parser");
var path        = require("path");
var mysql       = require('mysql');
var connection  = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : 'root',
    database : 'movies'
});

connection.connect();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/node", function (req,res) {
    res.render("home.ejs");
});

app.post("/form", function (req,res){
    var fname = req.body.fname;
    var lname = req.body.lname;
    var color = req.body.color;
    res.render("form.ejs",{fname:fname, lname:lname, color:color});
});

app.get("/env", function(req,res){
    res.send(process.env);
});

// hw3 routes
app.get("/movies", function(req,res){
    //Get the data from the database
    connection.query('SELECT * FROM movie_list', function(error, result, fields) {
        if (error) {
            console.log(error.message);
        } else {
            res.render("movies.ejs", {results: result});
        }
    });
});

// // Serve static files
// app.use(express.static('./views'));

app.get("/movies/new", function (req,res) {

    res.render("moviesForm.ejs");
});

app.post("/movies", function(req,res){
    var record ={
        title     : req.body.title,
        studio    : req.body.studio,
        year      : req.body.year,
        boxOffice : req.body.boxOffice,
        picture   : req.body.picture
    };

    var problem   = false;

    //data validation
    if(record.year.length != 4 || isNaN(record.year) || record.year < 1800 || record.year > 2020){
        res.render("badYear.ejs");
        problem = truee;
    }

    if(isNaN(record.boxOffice)){
        res.send("Please input a number for boxOffice. (With no $)");
        problem = true;
    }

    if(!problem){
        connection.query('INSERT INTO movie_list SET ?', record, function(error) {
            if (error) {
                console.log(error.message);
            } else {
                console.log('success');
            }
        });
        res.redirect("/movies");
    }
});

app.get("/movies/:id/edit", function (req,res) {
    var id = req.params.id;
    connection.query('SELECT * FROM movie_list WHERE movie_id=' + id, function(error, result, fields) {
        if (error) {
            console.log(error.message);
        } else {
            console.log(result);
            res.render("movieUpdate.ejs",{results:result[0]});
        }
    });
});

app.post("/movies/:id/", function (req,res) {
    var id        = req.params.id;
    var title     = req.body.title;
    var studio    = req.body.studio;
    var year      = req.body.year;
    var boxOffice = req.body.boxOffice;
    var picture   = req.body.picture;

    console.log(req.body);

    var sqlQuery =
          " UPDATE movie_list"
        + " SET title= '" + title + "',studio='" + studio + "' ,year='" + year + "', boxOffice='" + boxOffice + "' ,picture='" + picture
        + "' WHERE movie_id=" + id + ";";

    connection.query(sqlQuery, function(error, result, fields) {
        if (error) {
            console.log(error.message);
        } else {
            console.log('success');
        }
    });

    res.redirect("/movies")
});

app.get("/movies/:id/delete", function (req,res) {
    var id = req.params.id;
    // var conf = confirm("Are you sure you want to delete this movie from the database?");

    connection.query('DELETE FROM movie_list WHERE movie_id=' + id, function(error, result, fields) {
        if (error) {
            console.log(error.message);
        } else {
            console.log("success");
        }
    });
    res.redirect("/movies");

});
app.listen(8000,'198.199.116.102',function () {
    console.log("Server is running");
});
