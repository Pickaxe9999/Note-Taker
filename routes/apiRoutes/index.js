const {saveNote, deleteNote} = require('../../utils/index.js');
const router = require('express').Router();
const db = require('../../db/db.json');
const fs = require('fs');
const path = require('path');

//create a new note
router.post('/notes', (req, res) => {
    //save the input of the user to variable note
    const note = (req.body);

    //save to the database
    const notes = saveNote(note, db);

    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(notes, null, 2)
    )

    res.json(notes);
})

//retrive all notes
router.get('/notes', (req, res) =>{
    return res.json(db);
})

//delete a single note
router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const notes = deleteNote(id, db);

    //update the front end
    db.splice(0, db.length);
    notes.forEach(element => {
        db.push(element);
    });

    //update the backend
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(notes, null, 2)
    )

    res.json(notes);
})


module.exports = router;