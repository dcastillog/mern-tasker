const User = require('../models/User');
const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
  // Check errores
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() })
  }
  const { email, password } = req.body;
  
  try{
    // Revisamos si el usario es único    
    let user = await User.findOne({ email });

    if(user){
      return res.status(400).json({ msg: 'El usuario ya existe' })
    }

    // Crea nuevo usuario
    user = new User(req.body);

    // Hashear password
    const salt = await bcryptjs.genSalt(10);
    user.password = await bcryptjs.hash(password, salt);

    // Guardar usuario
    await user.save();

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
  }catch (error){
    console.log(error);
    res.status(400).send("Error");
  }
}