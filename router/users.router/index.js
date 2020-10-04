const router = require('express').Router();

const { usersController } = require('../../controllers');
const middlewares = require('../../middlewares');

router.get('/', middlewares.isAdmin, usersController.getAll);
router.get('/:id', middlewares.isAdmin, usersController.getById);

router.patch('/', usersController.change);
router.patch('/photo', usersController.changePhoto);
router.patch('/changePass', usersController.changePass);

router.post('/sendVerifyEmail', usersController.sendVerifyEmail);
router.post('/verifyEmail', usersController.verifyEmail);

router.delete('/', usersController.remove);

module.exports = router;
