const { notesRepository } = require("../../../repositories/");
module.exports = async ({ courseName }) => {
  return await notesRepository.destroy({ courseName });
};
