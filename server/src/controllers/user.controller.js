const jwt = require('jsonwebtoken');
// const { validationResult } = require('express-validator');

const User = require('../models/user');

exports.getAll = async (req, res) => {
  try {
    let from = Number(req.query.from) || 0;
    let limit = Number(req.query.limit) || 0;

    return User.find({})
      .skip(from)
      .limit(limit)
      .exec((err, users) => {
        if (err) {
          return res.status(400);
        }

        res.json(users);
      });
  } catch (err) {
    console.log(err);
  }
};

exports.create = async (req, res) => {
  // checkErrors(req);
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   // return res.status(400).json({ errors: errors.array() });
  // }

  const { email } = req.body;
  try {
    let userFound = await User.findOne({ email });
    if (userFound) {
      return res.status(400).json({ msg: 'error' });
    }

    const user = new User(req.body);

    // user.password = await hashPassword(password);

    await user.save();

    // Crear y firmar JWT
    const payload = {
      user: {
        id: user.id,
      },
    };

    // Firmar JWT
    jwt.sign(
      payload,
      process.env.PRIVATE_KEY,
      {
        expiresIn: 3600, // 1 hora
      },
      (error, token) => {
        if (error) throw error;

        // Mensaje de confirmación
        res.json({ token });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).send('Error');
  }
};
