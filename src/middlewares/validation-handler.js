const Boom = require("@hapi/boom");
const Joi = require("@hapi/joi");
const pick = require("./pick");

const validateSchema = (schema) => (request, response, next) => {
  const validSchema = pick(schema, ["params", "query", "body"]);
  const object = pick(request, Object.keys(validSchema));
  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: "key" } })
    .validate(object);

  if (error) {
    const errorMessage = error.details
      .map((details) => details.message)
      .join(", ");
    next(Boom.badRequest(errorMessage));
  }
  Object.assign(request, value);
  next();
};

module.exports = validateSchema;
