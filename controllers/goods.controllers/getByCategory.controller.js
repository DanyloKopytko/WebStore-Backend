const { Op } = require('sequelize');

const db = require('../../database').getInstance();

module.exports = async (req, res) => {
    try {
        const {category_id} = req.params;

        const GoodsModel = db.getModel('Goods');
        const CategoriesModel = db.getModel('Categories');

        const filter = {
            category_id
        };

        filter.naming = {
            [Op.startsWith]: req.query.naming
        };

        filter.price = {
            [Op.between] : [req.query.priceMin, req.query.priceMax]
        };

        const goods = await GoodsModel.findAll({
            where: filter,
            include: [{model: CategoriesModel, as: 'Category'}]
        });
            
        return res.status(200).send({error: false, goods});
    } catch (e) {
        console.log(e);
        res.status(200).send({error: true, message: e.message});
    }
};
