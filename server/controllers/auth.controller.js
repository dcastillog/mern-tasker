const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { hashPassword } = require('../common/utils/password');
const User = require('../models/user');

/**
 * POST api/signin
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
exports.signIn = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: 'El usuario no existe' });
    }

    const isCorrect = await bcryptjs.compare(password, user.password);

    if (!isCorrect) {
      return res.status(400).json({ msg: 'Contraseña incorrecta' });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.PRIVATE_KEY,
      {
        expiresIn: 3600, // 1 hora
      },
      (error, token) => {
        if (error) throw error;

        res.json({ token });
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.signUp = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let userFound = await User.findOne({ email });
    if (userFound) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const user = new User(req.body);

    user.password = await hashPassword(password);

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

/**
 * Method get authenticated current user
 *
 * @param {*} req
 * @param {*} res
 */
exports.getAuthUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Hubo un error' });
  }
};
