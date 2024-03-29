const { Schema, model } = require("mongoose");

const notesSchema = new Schema({
  courseName: String,
  score: Number,
  createdAt: { type: Date, default: Date.now },
});

notesSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = model("Note", notesSchema);
