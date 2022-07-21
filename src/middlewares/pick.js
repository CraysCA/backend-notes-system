const pick = (object, keys) =>
  keys.reduce((object_, key) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      // eslint-disable-next-line no-param-reassign
      object_[String(key)] = object[String(key)];
    }
    return object_;
  }, {});

module.exports = pick;
