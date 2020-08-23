const { Op } = require('sequelize');

const db = require('../database').getInstance();

module.exports = async (req, res, next) => {
    const {login, email} = req.body;

    const UserModel = db.getModel('Users');

    const user = await UserModel.findOne({
        where: {
            [Op.or]: [{email}, {login}]
        }
    });

    if (user) return res.status(200).send({error: true, message: 'User already exists'});

    next();
};
