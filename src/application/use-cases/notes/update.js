const { notesRepository } = require("../../../repositories/");
module.exports = async ({ courseName, data }) => {
  return await notesRepository.update({ courseName, data });
};
