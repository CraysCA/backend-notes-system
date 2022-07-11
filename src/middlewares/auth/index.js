const passport = require("passport");
const BasicStrategy = require("./basic-strategy");
const JwtStrategy = require("./header-strategy");

passport.use(BasicStrategy);
passport.use(JwtStrategy);
