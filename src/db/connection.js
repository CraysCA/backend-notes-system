const mongoose = require("mongoose");
const { db } = require("../config/config.js");

mongoose
  .connect(db.host, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.info("database connected");
  })
  .catch((err) => {
    console.error(err);
  });
