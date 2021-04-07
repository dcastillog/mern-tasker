module.exports.authValidation = require('./auth.validation');
// const { check, validationResult, oneOf } = require('express-validator');

// module.exports.validateTask = function (res, req, next) {};

// module.exports.validateUser = function (req, res, next) {
//   oneOf([
//     check('name', 'Name is required').not().isEmpty(),
//     check('email', 'Email is not valid').isEmail(),
//     check('password', 'Password invalid').isLength(6),
//   ]);

//   var errors = validationResult(req);
//   console.log(errors);
//   if (!errors.isEmpty()) {
//     res.status(400).json({ errors: errors.array() });
//   }
// };

// [
//   //     check('name', 'El nombre es obligatorio').not().isEmpty(),
//   //     check('email', 'Agrega un email válido').isEmail(),
//   //     check('password', 'El password debe ser mínimo de 6 caracteres').isLength(
//   //       {
//   //         min: 6,
//   //       }
//   //     ),
//   //   ],
