const db = require('../../database/').getInstance();

module.exports = async (req, res) => {
    try {
        const { goods_id } = req.body;

        const obj = {};

        for (const key in req.body) {
            if (key !== 'price' && key !== 'count') {
                if (req.body[key] && req.body.hasOwnProperty(key)) {
                    obj[key] = req.body[key];
                }
            }
        }

        const GoodsModel = db.getModel('Goods');

        GoodsModel.update(obj, {where: { id: goods_id }, returning: true}).then(data => {
            res.status(200).send({error: false, user: data[1][0]});
        });
    } catch (e) {
        console.log(e);
        res.status(200).send({error: true, message: e.message});
    }
};
