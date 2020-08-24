const db = require('../../database/').getInstance();

module.exports = async (req, res) => {
    try {
        const { id } = req.body;

        const obj = {};

        for (const key in req.body) {
            if (key !== 'role' && key !== 'pass' && key !== 'refresh_token') {
                if (req.body[key] && req.body.hasOwnProperty(key)) {
                    obj[key] = req.body[key];
                }
            }
        }

        const UserModel = db.getModel('Users');

        UserModel.update(obj, {where: {id}, returning: true}).then(data => {
            data[1][0].pass = null;
            res.status(200).send({error: false, user: data[1][0]});
        });
    } catch (e) {
        console.log(e);
        res.status(200).send({error: true, message: e.message});
    }
};
