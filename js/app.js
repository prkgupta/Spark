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

// connection.query('SELECT * from < table name >', function(err, rows, fields) {
//     if (!err)
//         console.log('The solution is: ', rows);
//     else
//         console.log('Error while performing Query.');
// });

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
   //res.send("Movies route is working");
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
        picture    : req.body.picture
    };

    var problem   = false;

    //data validation TODO
    if(record.year.length != 4 || isNaN(record.year))
        res.send("Please input a 4-digit number for year.");

    if(isNaN(record.boxOffice))
        res.send("Please input a number for boxOffice. (With no $)");

    connection.query('INSERT INTO movie_list SET ?', record, function(error) {
        if (error) {
            console.log(error.message);
        } else {
            console.log('success');
        }
    });

    res.redirect("/movies");
});

app.get("/movies/:id/edit", function (req,res) {
    var id = req.params.id;
    console.log(id);
    connection.query('SELECT * FROM movie_list WHERE movie_id=' + id, function(error, result, fields) {
        if (error) {
            console.log(error.message);
        } else {
            res.render("movieUpdate.ejs",{results:result});
        }
    });
});

app.put("/movies/:id/", function (req,res) {
    var id        = req.params.id;
    var title     = req.params.title;
    var studio    = req.params.studio;
    var year      = req.params.year;
    var boxOffice = req.params.boxOffice;
    var picture   = req.params.picture;

    var sqlQuery =
          ' UPDATE movie_list'
        + ' SET title=' + title + ',studio=' + studio + ' ,year=' + year + ', boxOffice=' + boxOffice + ' ,picture=' + picture
        + ' WHERE movie_id=' + id;

    connection.query(sqlQuery, function(error, result, fields) {
        if (error) {
            console.log(error.message);
        } else {
            console.log('success');
        }
    });

    res.redirect("/movies")
});
app.listen(8000,'198.199.116.102',function () {
    console.log("Server is running");
});
