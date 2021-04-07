const httpStatus = require('http-status');
const { userService, tokenService, authService } = require('../services');

const signUp = async (req, res) => {
  const user = await userService.createUser(req.body);
  const tokens = await tokenService.generateAuthTokens(user);
  res.status(httpStatus.CREATED).send({ user, tokens });
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.signInUserWithEmailAndPassword(email, password);
  const tokens = await tokenService.generateAuthTokens(user);
  res.send({ user, tokens });
};

module.exports = {
  signIn,
  signUp,
};
