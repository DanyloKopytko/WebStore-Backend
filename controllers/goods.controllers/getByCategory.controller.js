const db = require('../../database').getInstance();

module.exports = async (req, res) => {
    try {
        const { category_id } = req.params;

        const GoodsModel = db.getModel('Goods');

        const goods = await GoodsModel.findAll({ where: {category_id} });

        return res.status(200).send({error: false, goods});
    } catch (e) {
        console.log(e);
        res.status(200).send({error: true, message: e.message});
    }
};
