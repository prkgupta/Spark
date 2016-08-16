/**
 * Created by Hirad on 8/14/2016.
 */
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //res.end('Hello Apache!\n');
    res.render("../home.ejs");
}).listen(8000, '198.199.116.102');