const { Note } = require("../db/models");

const create = async ({ data }) => {
  const newNote = new Note({
    courseName: data.courseName,
    score: data.score,
  });

  return newNote
    .save()
    .then((item) => {
      return item;
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = { create };
