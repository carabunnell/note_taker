//include path to get correct file path for our html

var path = require("path");

//routing 
module.exports = function(app) {
    //html GET requests
    //below code handles when users "visit" a page. 
    //in each of the cases the user is shown an html page of content
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes-new.html"));
    });
    
    //If no matching route is found
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, 
        "../public/index.html"));
    });
}