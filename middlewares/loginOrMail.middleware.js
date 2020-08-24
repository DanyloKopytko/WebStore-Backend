const { regexps } = require('../config');

module.exports = (req, res, next) => {
    regexps.email.test(req.body.loginOrEmail) ? req.body.mail = req.body.loginOrEmail : req.body.login = req.body.loginOrEmail;
    next();
};