const bcrypt = require("bcrypt");

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

exports.Encrypt = (password) => {
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};
