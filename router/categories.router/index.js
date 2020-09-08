const router = require('express').Router();

const { categoriesController } = require('../../controllers');
const middlewares = require('../../middlewares');

router.get('/', categoriesController.getCategories);

router.use(middlewares.isAdmin);

router.post('/', middlewares.expectedFields(['name']), categoriesController.addCategory);

router.patch('/', middlewares.expectedFields(['name']), categoriesController.changeCategory);

router.delete('/', middlewares.expectedFields(['id']), categoriesController.deleteCategory);

module.exports = router;
