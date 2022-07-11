const basicStrategy = require("passport-http").BasicStrategy;
const bcrypt = require("bcrypt");
const boom = require("@hapi/boom");

const { GetUserByEmail } = require("../../application/use-cases/users");

const BasicStrategy = new basicStrategy(async (email, password, done) => {
  try {
    const user = await GetUserByEmail({ email });
    if (!user) done(boom.unauthorized, false);
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) done(boom.unauthorized, false);
    done(null, user);
  } catch (error) {
    done(error, false);
  }
});

module.exports = BasicStrategy;
