const db = require('../database').getInstance();

module.exports = async (req, res, next) => {
    const { userId } = req.body;
    const UserModel = db.getModel('Users');

    const user = await UserModel.findOne({where: {id: userId}});

    user.role === 'admin' ? next() : res.status(200).send({error: true, message: 'User not admin'});
};