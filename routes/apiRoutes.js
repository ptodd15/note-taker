const notesData = require('../data/notesData');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);
var notesData;

//GET
app.get('/notes', (req, res, next) => {
    readFileAsync('./db/db.json', 'utf8').then(function (data) {
        notesData = JSON.parse(data);
        res.json(notesData);
    });
});

//POST
app.post('/notes', (req, res) => {
    readFileAsync('./db/db.json', 'utf8').then(function (data) {
        notesData = JSON.parse(data);

        let newNote = req.body;
        let currentID = notesData.length;

        newNote.id = currentID + 1;

        notesData.push(newNote);

        writeFileAsync('./db/db.json', notesData).then(function (data) {
            console.log('Added note');
        });
        res.json(notesData);
    });
});

module.exports = app;