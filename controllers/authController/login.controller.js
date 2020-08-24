const { Op } = require('sequelize');
const db = require('../../database').getInstance();

const { passCompare } = require('../../utils');
const createTokens = require('../../utils/tokens/createTokens.util');

module.exports = async (req, res) => {
    try {
        const UserModel = db.getModel('Users');
        const {pass} = req.body;
        const user = await UserModel.findOne({
            where: {
                [Op.or]: [{email: req.body.mail}, {login: req.body.mail}]
            },
            attributes: {
                exclude: ['pass']
            }
        });

        if(!await passCompare(user.pass, pass)) res.status(200).send({error: true, message: 'Wrong username or password'});

        const tokens = await createTokens(user.id);

        return res.status(200).send({tokens}, ...user);
    } catch (e) {
        console.log(e);
    }

};
