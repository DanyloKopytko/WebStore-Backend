const { tokens } = require('../utils');

module.exports = (req, res, next) => {
    try {
        const decoded = tokens.verify(req.headers.authorization, process.env.ACCESS_TOKEN_KEY);
        req.body.userId = decoded.id;

        next();
    } catch (e) {
        return res.status(200).send({error: true, message: 'token is timed out'});
    }
};
