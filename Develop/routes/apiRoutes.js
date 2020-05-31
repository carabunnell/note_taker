// api routes. 
var path = require("path");
var fs = require("fs");
var filedNotes = path.join(__dirname, "../db/db.json")
// var noteData = require("../public/assets/notes.js");
// var noteIndex = require("../public/index.html")

module.exports = function (app) {
    // app.get("/api/notes", function (req, res) {
    //     res.json(noteData);
    //     //read file code
    // });
    // app.post("/api/notes", function (req, res) {

    //     //read note files here....fs.readFile
    //     noteData.push(req.body);
    //     res.json(true);
    // });

    app.get("/api/notes", function (req, res) {
        //reading notes from json
        fs.readFile(filedNotes, "utf8", (err, data) => {
            if (err) throw err;
            var parsed = JSON.parse(data);
            res.status(200).json(parsed);
        });
    });


    app.post("/api/notes", function (req, res) {
        //adding a new note to json and reading it. 
        console.log("filed notes:", filedNotes.length);
        //reading file
        
        // fs.readFileSync(filedNotes, "utf8", (err, data) => {
        //     if (err) throw err;
        //     var parsed = JSON.parse(data);
        //     console.log(parsed);
        // });
        var dataCurrent = fs.readFileSync(filedNotes, "utf8");
        var objCurrent = JSON.parse(dataCurrent);
        console.log(objCurrent);

        // var fullObject = obj.filter(note => { return note.id != idRemove });

        //consologing the parsed data to find the id of last input.
        // console.log(obj);
        var newNote = {
            id: Date.now(),
            title: req.body.title,
            text: req.body.text
        }
        console.log(newNote);

        //reading file
        var data = fs.readFileSync(filedNotes, "utf8");
        //parsing out file after reading file
        var obj = JSON.parse(data);
        //pushing new note to the parsed file
        obj.push(newNote);
        //moving data to a string instead of an object...i think
        var objString = JSON.stringify(obj, null, 2);

        //now rewriting the new note to the file in string format.
        fs.writeFile(filedNotes, objString, "utf8", err => {
            if (err) throw err;
            console.log("Successfully added note!");
        });
         //reading and rendering notes from json to site
         fs.readFile(filedNotes, "utf8", (err, data) => {
            if (err) throw err;
            console.log(data);
            var parsed = JSON.parse(data);
            res.status(200).json(parsed);
        });
    });


    app.delete("/api/notes/:id", function(req, res) {
        var idRemove = req.params.id;
        //reads file, consolelogs files, and then turns it into an object.
        var dataCurrent = fs.readFileSync(filedNotes, "utf8");
        console.log(dataCurrent);
        var objCurrent = JSON.parse(dataCurrent);
        //takes
        var updatedObject = objCurrent.filter(note => { return note.id != idRemove });
        var objString = JSON.stringify(updatedObject, null, 2);
    
        fs.writeFile(filedNotes, objString, "utf8", err => {
            if (err) throw err;
            console.log("note" + idRemove + "successfully deleted");
        });
        fs.readFile(filedNotes, "utf8", (err, data) => {
            if (err) throw err;
            var parsed = JSON.parse(data);
            res.status(200).json(parsed);
        });
    });

    // app.delete("api/notes/:id", function(req, res) {
    //     //take in params.
    //     var deleteId = req.params.id;
    //     console.log(deleteId);
    //     //read file here.....??
    //     // const readFile = fs.readFileSync(file, "utf8");

    //     for (var i = 0; i < noteData.length; i++) {
    //         console.log(notesData)
    //         if (deleteId === noteData[i].id) {
    //             delete notesArray[i];
    //         }
    //     }

    // res.json(deleteId);
    // });
    // app.get("/*", function(req, res) {
    //     res.json(noteIndex);
    // });
}