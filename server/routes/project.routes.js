const { Router } = require('express');
const { check } = require('express-validator');

const projectController = require('../controllers/project.controller');
const auth = require('../middleware/auth');

const router = Router();

router.post(
  '/',
  auth,
  [check('name', 'Project name is required').not().isEmpty()],
  projectController.create
);

router.get('/', auth, projectController.getByAuthUser);

router.put(
  '/:id',
  auth,
  [check('name', 'Project name is required').not().isEmpty()],
  projectController.update
);

router.delete('/:id', auth, projectController.remove);

module.exports = router;
