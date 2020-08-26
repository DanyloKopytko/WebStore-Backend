const db = require('../../database').getInstance();

const { tokens } = require('../../utils');

module.exports = async (req, res) => {
    try {
        const UserModel = db.getModel('Users');

        const { accessToken } = req.body;

        const decoded = tokens.verify(accessToken, process.env.ACCESS_TOKEN_KEY);

        const user = await UserModel.findOne({where: {id: decoded.id}, attributes: {exclude: ['pass']}});

        return res.status(200).send({error: false, user});
    } catch (e) {
        console.log(e);
        return res.status(200).send({error: true, message: e.message});
    }
};
