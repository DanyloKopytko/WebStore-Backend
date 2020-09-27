const db = require('../../database').getInstance();

const { tokens } = require('../../utils');

module.exports = async (req, res) => {
    try {
        const UserModel = db.getModel('Users');

        const decoded = await tokens.verify(req.headers.authorization, process.env.REFRESH_TOKEN_KEY);

        req.body.id = decoded.id;
        const [data] = await Promise.all([UserModel.findOne({
            where: {
                id: decoded.id,
                refresh_token: req.headers.authorization
            }
        })]);

        if (!data) return res.status(200).send('Bad token');

        const {id: userId, accessToken, refreshToken} = await tokens.create(decoded.id);

        res.status(200).send({id: userId, accessToken, refreshToken});
    } catch (e) {
        console.log(e);
        return res.status(200).send({error: true, message: 'Bad token'});
    }
};
