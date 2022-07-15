const {saveNote} = require('../../utils/index.js');
const router = require('express').Router();
const db = require('../../db/db.json');

//create a new note
router.post('/notes', (req, res) => {
    //save the input of the user to variable note
    const note = (req.body);

    //save to the database
    const notes = saveNote(note, db);
    res.json(notes);
})

//retrive all notes
router.get('/notes', (req, res) =>{
    return res.json(db);
})


module.exports = router;