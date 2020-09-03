const router = require('express').Router();

const { expectedFields: { goodsFields } } = require('../../config');

const { goodsController } = require('../../controllers');
const middlewares = require('../../middlewares');

router.get('/:category_id', goodsController.getByCategory);

router.use(middlewares.isAdmin);

router.post('/', middlewares.expectedFields(goodsFields), goodsController.add);
router.post('/insertExcelDataIntoDB', goodsController.insertExcelDataIntoDB);

router.patch('/', goodsController.change);

router.delete('/', middlewares.expectedFields(['id']), goodsController.delete);

module.exports = router;
