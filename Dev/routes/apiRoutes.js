const notes = require('express').Router();
const {readAndAppend, readFromFile} = require('../helpers/fsUtils');

notes.get('./', (req, res) => {
    readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)));
});
notes.post('/', (req, res) => {
    console.log(req.body);
    const {title, text} = req.body;
    if (req.body) {
        const newNote = {
            title,
            text,
        };
        readAndAppend(newNote, './db/db.json');
        res.json('New Note posted: ');
    } else {
        res.json('Err. in posting New Note. ');
    }
});

module.exports = notes;