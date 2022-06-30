const { usersRepository } = require("../../../repositories");
module.exports = async ({ id }) => {
  return await usersRepository.destroy({ id });
};
