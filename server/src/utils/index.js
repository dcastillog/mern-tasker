const bcryptjs = require('bcryptjs');

module.exports.hashPassword = async function hassPasword(password) {
  const salt = await bcryptjs.genSalt(10);
  return await bcryptjs.hash(password, salt);
};
