const mongoose = require('mongoose');

let NotesSchema = new mongoose.Schema({
    name: String,
    description: String,
    completed: Boolean,
})

let NotesModel = mongoose.model('notes', NotesSchema)

module.exports = NotesModel;