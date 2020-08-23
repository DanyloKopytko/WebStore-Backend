const { regexps } = require('../config');

module.exports = (req, res, next) => !regexps.pass.test(req.body.pass) ? res.status(200).send({error: true, message: 'Password is invalid'}) : next();
