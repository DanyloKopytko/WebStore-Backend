const db = require('../../database').getInstance();

module.exports = async (req, res) => {
    try {
        const UserModel = db.getModel('Users');
        const {id} = req.body;

        UserModel.destroy({where: {id}}).then(() => res.status(200).send({error: false, message: 'Deleted'})).catch(error => res.status(400).send(error));
    } catch (e) {
        console.log(e);
        res.status(400).send({error: true, message: 'Oops something went wrong!'});
    }
};