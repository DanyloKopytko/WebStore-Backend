const router = require('express').Router();

const { authController } = require('../../controllers');
const { expectedFields, userExist, passValidator } = require('../../middlewares');

const { expectedFields: { registrationFields, loginFields } } = require('../../config');

router.post('/register', expectedFields(registrationFields), userExist, passValidator, authController.register);
router.post('/login', expectedFields(loginFields), authController.login);

module.exports = router;
