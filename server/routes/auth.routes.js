const { Router } = require('express');

const authController = require('../controllers/auth.controller');
const auth = require('../middleware/auth');

const router = Router();

router.post('/signin', authController.signIn);
router.post('/signup', authController.signUp);
router.get('/user', auth, authController.getAuthUser);

module.exports = router;
