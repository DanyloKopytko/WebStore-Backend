const router = require('express').Router();

const { authController } = require('../../controllers');
const { expectedFields, userExist, passValidator } = require('../../middlewares');

const { expectedFields: { registrationFields } } = require('../../config');

router.post('/register', expectedFields(registrationFields), userExist, passValidator, authController.register);

module.exports = router;
