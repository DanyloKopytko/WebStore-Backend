const db = require('../../database/').getInstance();

module.exports = async (req, res) => {
    try {
        const { userId } = req.body;

        const obj = {};

        for (const key in req.body) {
            if (key !== 'pass' && key !== 'refresh_token') {
                if (req.body[key] && req.body.hasOwnProperty(key)) {
                    obj[key] = req.body[key];
                }
            }
        }

        obj.id = userId;

        const UserModel = db.getModel('Users');

        UserModel.update(obj, {where: { id: userId }, returning: true}).then(data => {
            data[1][0].pass = null;
            res.status(200).send({error: false, user: data[1][0]});
        });
    } catch (e) {
        console.log(e);
        res.status(200).send({error: true, message: e.message});
    }
};
