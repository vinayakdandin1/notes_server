const mongoose = require('mongoose');

let NotesSchema = new mongoose.Schema({
    name: {
      type: String,
      require: true
    },
    description: String,
    completed: Boolean,
})

let NotesModel = mongoose.model('note', NotesSchema)

module.exports = NotesModel;