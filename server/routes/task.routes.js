const { Router } = require('express');

const taskController = require('../controllers/task.controller');
const auth = require('../middleware/auth');

const router = Router();

router.get('/', auth, taskController.getAll);
router.get('/:projectId', taskController.getByProject);
router.post('/', auth, taskController.create);
router.put('/:id', auth, taskController.update);
router.delete('/:id', auth, taskController.remove);

module.exports = router;
