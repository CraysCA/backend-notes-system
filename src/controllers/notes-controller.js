const {
  Find,
  Create,
  Update,
  Destroy,
} = require("../application/use-cases/notes");

const createNote = async (request, response, next) => {
  const { body: data } = request;
  try {
    const newNote = await Create({ data });
    console.log(newNote);
    if (newNote) {
      response.status(201).json({
        success: true,
        message: "note created",
        data: newNote,
      });
    } else {
      response.status(500).json({
        success: false,
        message: "fail to create",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { createNote };
