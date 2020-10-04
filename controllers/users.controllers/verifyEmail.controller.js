const db = require('../../database/').getInstance();

module.exports = async (req, res) => {
    try{
        const UserModel = db.getModel('Users');
        const { userId } = req.body;

        await UserModel.update({verified: true}, {where: { id: userId }, returning: true}).then(data => {
            data[1][0].pass = null;
            res.status(200).send({error: false, user: data[1][0]});
        });
    } catch (e) {
        console.log(e);
        res.status(400).send({error: true, message: 'Oops something went wrong!'});
    }
};