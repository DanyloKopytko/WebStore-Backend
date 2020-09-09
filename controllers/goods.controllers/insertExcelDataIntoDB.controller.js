const { excelParser } = require('../../utils');

const db = require('../../database').getInstance();

module.exports = async (req, res) => {
    try {
        const parsedExcel = await excelParser(req.files.excelFile);

        const GoodsModel = db.getModel('Goods');

        await Promise.all(parsedExcel.map(async product => {
            const {Article, Naming, Description, Price, ...rest} = product;
            await GoodsModel.create({
                article: Article,
                naming: Naming,
                description: Description,
                price: Price,
                characteristics: rest
            });
        })).then(() => {
            res.status(200).send({error: false});
        });
    } catch (e) {
        console.log(e);
        res.status(200).send({error: true, message: e.message});
    }
};
