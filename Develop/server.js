//require the npm package to give server functionality
var express = require("express");
//telling node to create an "express" server
var app = express();
//set the port to use for the listener
var PORT = process.env.PORT || 9090;
//sets up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//router to point our server to a series of "route" files. These routes give our server a map of how to respond when users request data from urls. ?should contain file names that it's reading? and reqire fs?
require("fileinputhere")(app);
//here we "start" our server
app.listen(PORT, function() {
    console.log("app listening on PORT: " + PORT);
}); 