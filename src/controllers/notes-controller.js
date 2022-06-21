const {
  Find,
  Create,
  Update,
  Destroy,
} = require("../application/use-cases/notes");

const findNote = async (request, response, next) => {
  const { courseName } = request.query;
  try {
    const notes = await Find({ courseName });

    if (notes) {
      response.status(201).json({
        success: true,
        message: "notes listed",
        data: notes,
      });
    } else {
      response.status(404).json({
        success: false,
        message: "not found",
      });
    }
  } catch (error) {
    next(error);
  }
};

const createNote = async (request, response, next) => {
  const { body: data } = request;
  try {
    const newNote = await Create({ data });
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

const updateNote = async (request, response, next) => {
  const { courseName } = request.params;
  const { body: data } = request;
  try {
    const note = await Update({ courseName, data });

    if (note) {
      response.status(200).json({
        success: true,
        message: "note updated",
        data: note,
      });
    } else {
      response.status(409).json({
        success: false,
        message: "fail to update",
      });
    }
  } catch (error) {
    next(error);
  }
};

const destroyNote = async (request, response, next) => {
  const { courseName } = request.params;
  try {
    const note = await Destroy({ courseName });

    if (note) {
      response.status(200).json({
        success: true,
        message: "note deleted",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { findNote, createNote, updateNote, destroyNote };
