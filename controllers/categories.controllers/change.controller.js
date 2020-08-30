const db = require('../../database').getInstance();

module.exports = async (req, res) => {
    try {
        const { id, name } = req.body;

        const CategoriesModel = db.getModel('Categories');

        const newCategory = await CategoriesModel.update({where: {id}}, {name}, {returning: true});

        return res.status(200).send({error: false, newCategory});
    } catch (e) {
        console.log(e);
        res.status(200).send({error: true, message: e.message});
    }
};
