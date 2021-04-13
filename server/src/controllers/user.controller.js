const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { userService } = require('../services');

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const getUsers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await userService.queryUsers(filter, options);
  res.send(result);
});

const getUser = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user);
});

const updateUser = catchAsync(async (req, res) => {
  const user = await userService.updateUserById(req.params.userId, req.body);
  res.send(user);
});

const deleteUser = catchAsync(async (req, res) => {
  await userService.deleteUserById(req.params.userId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};

// const jwt = require('jsonwebtoken');
// // const { validationResult } = require('express-validator');

// const User = require('../models/user');

// exports.getAll = async (req, res) => {
//   try {
//     let from = Number(req.query.from) || 0;
//     let limit = Number(req.query.limit) || 0;

//     return User.find({})
//       .skip(from)
//       .limit(limit)
//       .exec((err, users) => {
//         if (err) {
//           return res.status(400);
//         }

//         res.json(users);
//       });
//   } catch (err) {
//     console.log(err);
//   }
// };

// exports.create = async (req, res) => {
//   // checkErrors(req);
//   // const errors = validationResult(req);
//   // if (!errors.isEmpty()) {
//   //   // return res.status(400).json({ errors: errors.array() });
//   // }

//   const { email } = req.body;
//   try {
//     let userFound = await User.findOne({ email });
//     if (userFound) {
//       return res.status(400).json({ msg: 'error' });
//     }

//     const user = new User(req.body);

//     // user.password = await hashPassword(password);

//     await user.save();

//     // Crear y firmar JWT
//     const payload = {
//       user: {
//         id: user.id,
//       },
//     };

//     // Firmar JWT
//     jwt.sign(
//       payload,
//       process.env.PRIVATE_KEY,
//       {
//         expiresIn: 3600, // 1 hora
//       },
//       (error, token) => {
//         if (error) throw error;

//         // Mensaje de confirmación
//         res.json({ token });
//       }
//     );
//   } catch (error) {
//     console.log(error);
//     res.status(400).send('Error');
//   }
// };
