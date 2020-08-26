const router = require('express').Router();

const { usersController } = require('../../controllers');

router.get('/', usersController.getAll);

router.patch('/', usersController.change);

router.get('/:id', usersController.getById);

router.delete('/remove', usersController.remove)

module.exports = router;
