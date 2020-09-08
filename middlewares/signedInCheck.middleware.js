const { tokens } = require('../utils');

module.exports = (req, res, next) => {
    try {
        req.body.userId = req.headers.authorization ? tokens.verify(req.headers.authorization, process.env.ACCESS_TOKEN_KEY).id : null;

        next();
    } catch (e) {
        return res.status(200).send({error: true, message: e.message});
    }
};
