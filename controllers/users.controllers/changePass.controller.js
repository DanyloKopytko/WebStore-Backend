const db = require('../../database').getInstance();

const { hasher, passCompare } = require('../../utils');

module.exports = async(req, res) => {
    try{
        const UserModel = db.getModel('Users');

        const {oldPass, newPass, userId} = req.body;

        const user = await UserModel.findOne({where: {id: userId}});

        await passCompare(user.pass, oldPass).then(async () => {
            const hash = await hasher(newPass);

            await user.update({pass: hash}, {returning: true});

            return res.status(200).send({error: false, message: 'Successfully changed'});
        }).catch((e) => {
            console.log(e);
            return res.status(200).send({error: true, message: 'Wrong password'});
        });
    } catch (e) {
        console.log(e);
        return res.status(200).send({error: true, message: e.message});
    }
};