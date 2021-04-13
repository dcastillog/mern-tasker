const { Router } = require('express');

const validate = require('../middlewares/validate');
const auth = require('../middlewares/auth');

const { authValidation } = require('../validations');
const authController = require('../controllers/auth.controller');

const router = Router();

router.post('/signin', validate(authValidation.signin), authController.signIn);
router.post('/signup', validate(authValidation.signup), authController.signUp);
router.post('/logout', validate(authValidation.logout), authController.logout);
router.post('/refresh-tokens', validate(authValidation.refreshTokens), authController.refreshTokens);
router.post('/forgot-password', validate(authValidation.forgotPassword), authController.forgotPassword);
router.post('/reset-password', validate(authValidation.resetPassword), authController.resetPassword);
router.post('/send-verification-email', auth(), authController.sendVerificationEmail);
router.post('/verify-email', validate(authValidation.verifyEmail), authController.verifyEmail);

module.exports = router;
