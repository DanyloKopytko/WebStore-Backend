const router = require('express').Router();

const { usersController } = require('../../controllers');

router.get('/', usersController.getAll);

module.exports = router;
