const { notesRepository } = require("../../../repositories/");
module.exports = async ({ data }) => {
  return await notesRepository.create({ data });
};
