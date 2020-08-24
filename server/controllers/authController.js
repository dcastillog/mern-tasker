const User = require('../models/User');
const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken');

exports.authUser = async(req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() })
  }
  const { email, password } = req.body;

  try{
    // Revisar que sea un usuario registrado
    let user = await User.findOne({ email })
    if(!user){
      return res.status(400).json({ msg: 'El usuario no existe' })
    }

    // Revisar el password
    const correctPass = await bcryptjs.compare(password, user.password);
    if(!correctPass){
      return res.status(400).json({ msg: 'Contraseña incorrecta' })
    }

    // Crear y firmar JWT
    const payload = {
      user: {
        id: user.id,

      }
    }

    // Firmar JWT
    jwt.sign(payload, process.env.PRIVATE_KEY, {
      expiresIn: 3600 // 1 hora
    }, (error, token) => {
      if(error) throw error;

      // Mensaje de confirmación
      res.json({ token })
    });
  } catch(error){
    console.log(error);
  }
  
}

// Obiente que usuario esta autenticado

exports.getAuthUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json({user});
  } catch (error){
    console.log(error);
    res.status(500).json({msg: 'Hubo un error'});
  }
}
