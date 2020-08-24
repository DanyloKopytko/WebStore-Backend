const { regexps } = require('../config');

module.exports = (req, next) => {
    !regexps.email.test(req.body.LoginOrEmail) ? req.body.mail = req.body.LoginOrEmail : req.body.login = req.body.LoginOrEmail;
    next();
};