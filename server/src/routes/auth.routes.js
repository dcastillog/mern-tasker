const { Router } = require('express');

const validate = require('../middleware/validate');
const { authValidation } = require('../validations');
const authController = require('../controllers/auth.controller');

const router = Router();

router.post('/signin', validate(authValidation.signin), authController.signIn);
router.post('/signup', validate(authValidation.signup), authController.signUp);
// router.get('/user', auth, authController.getAuthUser);

module.exports = router;
