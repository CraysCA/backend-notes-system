const { Note } = require("../db/models");

const find = async ({ courseName }) => {
  if (courseName) {
    return Note.find({ courseName })
      .then((item) => {
        return item;
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    return Note.find()
      .then((item) => {
        return item;
      })
      .catch((error) => {
        console.error(error);
      });
  }
};

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

const update = async ({ courseName, data }) => {
  return Note.updateOne(
    { courseName },
    { $set: { score: data.score, courseName: data.courseName } }
  )
    .then((item) => {
      return item;
    })
    .catch((error) => {
      console.error(error);
    });
};

const destroy = async ({ courseName }) => {
  return Note.deleteOne({ courseName })
    .then((item) => {
      return item;
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = { find, create, destroy, update };
