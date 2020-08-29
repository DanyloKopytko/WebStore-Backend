const router = require('express').Router();

const { categoriesController } = require('../../controllers');
const middlewares = require('../../middlewares');

//TODO here should be get all categories, isAdmin won't involve it

router.get('/', categoriesController.getCategories);
router.use(middlewares.isAdmin);
router.post('/', categoriesController.addCategory);
router.patch('/', categoriesController.changeCategory);
router.delete('/', categoriesController.deleteCategory);

module.exports = router;
