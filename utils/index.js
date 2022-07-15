const fs = require('fs');
const path = require('path');
const shortUniqueId = require('short-unique-id');

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

module.exports = {
    saveNote
}