const router = require('express').Router();

const { authController } = require('../../controllers');
const { expectedFields, userExist, passValidator, loginOrMail } = require('../../middlewares');

const { expectedFields: { registrationFields, loginFields } } = require('../../config');

router.post('/register', expectedFields(registrationFields), userExist, passValidator, authController.register);
router.post('/login', expectedFields(loginFields), loginOrMail, authController.login);
router.post('/getUserByAccessToken', authController.getUserByAccessToken);
router.post('/refreshTokens', authController.refreshTokens);
router.post('/sendRefreshPass', authController.sendRefreshPass);
router.post('/refreshPass', passValidator, authController.refreshPass);

module.exports = router;
