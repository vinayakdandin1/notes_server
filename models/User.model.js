const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    
  },
  password: {
    type: String,
    require: true
  },
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
  },
  noteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'note'
  }

});

const User = model("User", userSchema);

module.exports = User;
