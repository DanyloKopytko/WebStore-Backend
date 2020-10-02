const db = require('../../database').getInstance();

module.exports = (req, res) => {
    try {
        const UserModel = db.getModel('Users');

        const {userId} = req.body;

        UserModel.findAll({where: {userId}, attributes: {exclude: ['pass']}})
            .then(data => {
                res.send(data);
            });
    } catch (e) {
        console.log(e);
        res.status(400).send({error: true, message: 'Oops something went wrong!'});
    }
};
