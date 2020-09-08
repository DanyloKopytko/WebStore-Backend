const { excelParser } = require('../../utils');

const db = require('../../database').getInstance();

module.exports = async (req, res) => {
    try {
        const parsedExcel = await excelParser(req.files.excelFile);

        const GoodsModel = db.getModel('Goods');

        await Promise.all(parsedExcel.map(async product => {
            await GoodsModel.create({
                article: product.Article,
                naming: product.Naming,
                description: product.Description,
                price: product.Price
            });
        })).then(() => {
            res.status(200).send({error: false});
        });
    } catch (e) {
        console.log(e);
        res.status(200).send({error: true, message: e.message});
    }
};
