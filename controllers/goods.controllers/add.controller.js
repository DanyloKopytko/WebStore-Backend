const db = require('../../database').getInstance();

module.exports = async (req, res) => {
    try {
        const { article, naming, description, characteristics, count, price, category_id } = req.body;

        const GoodsModel = db.getModel('Goods');

        const newGoods = await GoodsModel.create({
            article,
            naming,
            description,
            characteristics,
            count,
            price,
            category_id
        }, {returning: true});

        return res.status(200).send({error: false, newGoods});
    } catch (e) {
        console.log(e);
        res.status(200).send({error: true, message: e.message});
    }
};
