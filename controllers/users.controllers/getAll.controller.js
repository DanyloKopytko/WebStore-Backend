const db = require('../../database').getInstance();

module.exports = async (req, res) => {
    try {
        const Users = db.getModel('Users');

        res.status(200).send(await Users.findAll({attributes: {exclude: ['pass']}}));
    } catch (e) {
        res.status(200).send({error: true, message: e.message});
    }
};
