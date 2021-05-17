const { Router } = require('express');

const router = Router();

router.use('/auth', require('./auth.routes'));
router.use('/users', require('./user.routes'));
router.use('/tasks', require('./task.routes'));
router.use('/projects', require('./project.routes'));
router.use('/projects', require('./projectTask.routes'));
router.use('/teams', require('./team.routes'));
router.use('/tags', require('./tag.routes'));

module.exports = router;
