const router = require('express').Router();

const { usersController } = require('../../controllers');

router.get('/', usersController.getAll);

router.patch('/', usersController.change);

module.exports = router;
