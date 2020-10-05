const db = require('../../database').getInstance();
const { v4 } = require('uuid');

const { hasher } = require('../../utils');

module.exports = async (req, res) => {
    try {
        const UserModel = db.getModel('Users');

        const {pass, refreshPass} = req.body;

        const hash = await hasher(pass);

        const user = await UserModel.findOne({where: {refreshPass}});

        if(!user) return res.status(200).send({error: true, message: 'URL is outdated'});

        const newRefreshPass = v4();

        await user.update({pass: hash, refreshPass: newRefreshPass});

        return res.status(200).send({error: false, message: 'Password changed'});
    } catch (e) {
        console.log(e);
        res.status(200).send({error: true, message: 'Oops, something went wrong...'});
    }
};