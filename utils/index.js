const shortUniqueId = require('short-unique-id');

//save a note to the database
function saveNote(note, notes) {

    //create a unique id for each note
    const id = new shortUniqueId({length:10});
    note.id = id();

    notes.push(note);

    return notes;
}

//remove a note from the database
function deleteNote(id, notes){
    const updatedNotes = notes.filter(note => {
        if(note.id !== id){
            return note;
        }
    })

    return updatedNotes;
}

module.exports = {
    saveNote,
    deleteNote
}