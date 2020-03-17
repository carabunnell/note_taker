// api routes. 
var noteData = require("../public/assets/notes.js")(app);

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(noteData);
    });
    app.post("/api/notes", function(req, res) {
        res.json(true);
    });
    app.delete("api/notes/" + id, function(req, res) {
        res.json(noteData + id);
    });
}