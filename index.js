/**
 * Main File of the application
 */

//dependencies
const http = require("http");
const url = require("url");


//Defines what the server does
var server = http.createServer(function(req, res){
  

    //parse url
    let parsedUrl = url.parse(req.url, true);

    //method
    let method = req.method.toLowerCase();

    //get the path from the url
    let path = parsedUrl.pathname;
    let trimmedPath = path.replace(/^\/+|\/+$/g, '');

    //get the query string as an object
    let queryStringObject = parsedUrl.query;


    //get the header as an object
    let headers = req.headers;

    //send the response
    res.end("Hello World!");
    //log the response
    console.log("received with headers", headers);

});

//start the server and listen
server.listen(3000, function(){
    console.log("Server Listening on Port 3000");
})