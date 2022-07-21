const fs = require('fs');
const path = require('path');
const shortUniqueId = require('short-unique-id');

//save a note to the database
function saveNote(note, notes) {

    //create a unique id for each note
    const id = new shortUniqueId({length:10});
    note.id = id();

    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
    )

    return notes;
}

//remove a note from the database
function deleteNote(id, db){
    db = db.filter(note => {
        if(note.id !== id){
            return note;
        }
    })

    updatedDb = JSON.stringify(db);

    fs.writeFile('../Note-Taker/db/db.json', updatedDb, err => {
        if(err){
            console.log(err);
        }
    });

    return db;
}

module.exports = {
    saveNote,
    deleteNote
}