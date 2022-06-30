const { usersRepository } = require("../../../repositories/");
const bcrypt = require("bcrypt");
module.exports = async ({ data }) => {
  if (data.password) {
    const hash = bcrypt.hashSync(data.password, 10);
    data.password = hash;
  }
  return await usersRepository.create({ data });
};
