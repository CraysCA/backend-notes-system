const { Schema, model } = require("mongoose");

const usersSchema = new Schema({
  name: String,
  lastname: String,
  img: String,
  email: String,
  password: String,
  isAdmin: Boolean,
  createdAt: { type: Date, default: Date.now },
  course: String,
});

usersSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.password;
  },
});

module.exports = model("User", usersSchema);
