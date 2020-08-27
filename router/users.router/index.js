const router = require('express').Router();

const { usersController } = require('../../controllers');

router.get('/', usersController.getAll);
router.get('/:id', usersController.getById);

router.patch('/', usersController.change);
router.patch('/photo', usersController.changePhoto);

router.delete('/remove', usersController.remove);

module.exports = router;
