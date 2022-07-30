const basicStrategy = require("passport-http").BasicStrategy;
const bcrypt = require("bcrypt");
const boom = require("@hapi/boom");

const { GetUserByEmail } = require("../../application/use-cases/users");

const BasicStrategy = new basicStrategy(async (email, password, done) => {
  const user = await GetUserByEmail({ email });

  if (!user) return done(boom.unauthorized(), false);
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return done(boom.unauthorized(), false);
  return done(null, user);
});

module.exports = BasicStrategy;
