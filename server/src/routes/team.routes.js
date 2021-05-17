const { Router } = require('express');
const auth = require('../middlewares/auth');
const validate = require('../middlewares/validate');
const { teamValidation } = require('../validations');
const teamController = require('../controllers/team.controller');
const router = Router();

router
  .route('/')
  .post(auth(), validate(teamValidation.createTeam), teamController.createTeam)
  .get(auth(), validate(teamValidation.getTeams), teamController.getTeams);

router
  .route('/:teamId')
  .get(auth(), validate(teamValidation.getTeam), teamController.getTeam)
  .patch(auth(), validate(teamValidation.updateTeam), teamController.updateTeam)
  .delete(auth(), validate(teamValidation.removeTeam), teamController.removeTeam);

module.exports = router;
