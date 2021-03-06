const db = require('../../database').getInstance();

module.exports = async (req, res) => {
    try {
        const { id } = req.body;
        
        const CategoriesModel = db.getModel('Categories');

        await CategoriesModel.destroy({where: {id}});

        return res.status(200).send({error: false, message: 'Deleted'});
    } catch (e) {
        console.log(e);
        res.status(200).send({error: true, message: e.message});
    }
};    
