const { usersRepository } = require("../../../repositories/");
const bcrypt = require("bcrypt");
module.exports = async ({ id, data, oldUserData }) => {
  if (oldPassword && newPassword) {
    const match = await bcrypt.compare(
      data.oldPassword,
      oldUserData[0].password
    );
    if (match) {
      const hash = bcrypt.hashSync(data.newPassword, 10);
      data.password = hash;
      delete data.oldPassword;
      delete data.newPassword;
    }

    return await usersRepository.update({ id, data });
  }
};
