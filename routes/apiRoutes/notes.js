const router = require('express').Router();
const fs = require('fs');
const path = require('path');

router.get('/notes', (req, res) => {
    // get current notes data from db.json
    let currentnotes = fs.readFileSync('./db/db.json', 'utf8');
        // then parse into readable json
        currentnotes = JSON.parse(currentnotes);
        res.json(currentnotes);
});

// posts new notes data to db.json
router.post('/notes', (req, res) => {
    const singleNote = req.body; 
    let totalNotes = []; 

    fs.readFile(path.join('./db/db.json'), 'utf8', (err, data) => {
        if (err) {
            return console.log(err);
        }
        // if nothing, creates the first note with a id of 1
        if(data === '') {
            totalNotes.push({ 'id': 1, "title": singleNote.title, "text": singleNote.text });
        } else {
            totalNotes = JSON.parse(data);
            totalNotes.push({ 'id': totalNotes.length + 1, "title": singleNote.title, "text": singleNote.text });
        }
        // add notes to new db.json file, overwriting previous one
        fs.writeFile((path.join('./db/db.json')), JSON.stringify(totalNotes, null, 2), (err) => {
            if (err) {
                return console.log(err);
            }
            res.json(totalNotes);
        });
    });
});

module.exports = router;