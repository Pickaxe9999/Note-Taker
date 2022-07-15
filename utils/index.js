const fs = require('fs');
const path = require('path');

function saveNote(note, notes) {
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