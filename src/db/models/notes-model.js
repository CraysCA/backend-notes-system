const { Schema, model } = require("mongoose");

const notesSchema = new Schema({
  courseName: String,
  score: Number,
  createdAt: { type: Date, default: Date.Now },
});

notesSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Note = model("Note", notesSchema);

module.exports = Note;
