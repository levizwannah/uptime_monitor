/**
 * Main File of the application
 */

//dependencies
import http from "http";

//Defines what the server does
var server = http.createServer(function(req, res){
    res.end("Hello World!");
});

//start the server and listen
server.listen(3000, function(){
    console.log("Server Listening on Port 3000");
})