// api routes. 
var noteData = require("../public/assets/notes.js");
// var noteIndex = require("../public/index.html")

module.exports = function (app) {
        app.get("/api/notes", function (req, res) {
            res.json(noteData);
        });
        app.post("/api/notes", function (req, res) {
            noteData.push(req.body);
            res.json(true);
        });
        app.delete("api/notes/:id", function(req, res) {
            var deleteId = req.params.id;
            for (var i = 0; i < notesArray.length; i++) {
                if (deleteId === notesArray[i].title) {
                    delete notesArray[i];
                }
            }
            
            // res.json(deleteId);
        });
            // app.get("/*", function(req, res) {
            //     res.json(noteIndex);
            // });
        }