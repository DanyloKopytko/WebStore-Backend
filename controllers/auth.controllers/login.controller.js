const { Op } = require('sequelize');

const db = require('../../database').getInstance();

const { passCompare, tokens } = require('../../utils');

module.exports = async (req, res) => {
    try {
        const UserModel = db.getModel('Users');

        const pass = req.body.pass;

        const user = await UserModel.findOne({
            where: {
                [Op.or]: [{email: req.body.email ? req.body.email : ''}, {login: req.body.login ? req.body.login : ''}]
            }
        });

        await passCompare(user.pass, pass).then(async () => {
            const tokenPair = await tokens.create(user.id);

            return res.status(200).send({
                tokenPair,
                id: user.id,
                name: user.name,
                surname: user.surname,
                login: user.login,
                email: user.email,
                role: user.role,
                avatar_url: user.avatar_url
            });
        }).catch((e) => {
            res.status(200).send({error: true, message: e});
        });
    } catch (e) {
        console.log(e);
        return res.status(200).send({error: true, message: 'User not found'});
    }
};
