// Rutas para autenticar usuario
const authController = require('../controllers/authController')
const express = require('express');
const router = express.Router();
const { check } = require('express-validator')
const auth = require('../middleware/auth');

// Iniciar sesión
// api/auth
router.post('/',
  authController.authUser
);

// Obtiene el usuario autenticado
router.get('/',
  auth,
  authController.getAuthUser
)

module.exports = router; 