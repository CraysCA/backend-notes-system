const { Strategy, ExtractJwt } = require("passport-jwt");
const bcrypt = require("bcrypt");
const boom = require("@hapi/boom");
const { jwtSecretKey } = require("../../config/config");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecretKey,
};

const JwtStrategy = new Strategy(options, (payload, done) => {
  return done(null, payload);
});

module.exports = JwtStrategy;
