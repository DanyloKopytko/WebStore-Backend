const db = require('../../database').getInstance();

module.exports = async (req, res) => {
    try {
        const CategoriesModel = db.getModel('Categories');

        const categories = await CategoriesModel.findAll();

        return res.status(200).send({error: false, message: categories});
    } catch (e) {
        console.log(e);
        res.status(200).send({error: true, message: e.message});
    }
};