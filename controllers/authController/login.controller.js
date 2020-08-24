const {Op} = require('sequelize');
const db = require('../../database').getInstance();

const {passCompare} = require('../../utils');
const createTokens = require('../../utils/tokens/createTokens.util');

module.exports = async (req, res) => {
    try {
        console.log(req.body);
        const UserModel = db.getModel('Users');
        const pass = req.body.pass;
        const user = await UserModel.findOne({
            where: {
                [Op.or]: [{email: req.body.mail ? req.body.mail : ''}, {login: req.body.login ? req.body.login : ''}]
            }
        });
        await passCompare(user.pass, pass).then(async () => {
            const tokens = await createTokens(user.id);
            return res.status(200).send({
                tokens,
                id: user.id,
                name: user.name,
                surname: user.surname,
                login: user.login,
                mail: user.mail,
                photoUrl: user.photoUrl,
                role: user.role,
                favouritesHousesIds: user.favouritesHousesIds
            });
        }).catch(() => {
            res.status(200).send({error: true, message: 'Wrong username or password'});
        });
    } catch (e) {
        return res.status(200).send({error: true, message: 'User not found'});
        console.log(e);
    }
};
