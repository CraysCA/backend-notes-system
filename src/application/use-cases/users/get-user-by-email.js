const { usersRepository } = require("../../../repositories/");
module.exports = async ({ email }) => {
  return await usersRepository.findByEmail({ email });
};
