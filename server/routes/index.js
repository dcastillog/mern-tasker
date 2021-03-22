const { Router } = require('express');

const router = Router();

router.use('/api/users', require('./user.routes'));
router.use('/api/tasks', require('./task.routes'));
router.use('/api/projects', require('./project.routes'));
router.use('/api/auth', require('./auth.routes'));

module.exports = router;
