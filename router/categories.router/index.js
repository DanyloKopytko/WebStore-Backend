const router = require('express').Router();

const { categoriesController } = require('../../controllers');
const middlewares = require('../../middlewares');

//TODO here should be get all categories, isAdmin won't involve it

router.use(middlewares.isAdmin);
router.post('/', categoriesController.addCategory);

module.exports = router;
