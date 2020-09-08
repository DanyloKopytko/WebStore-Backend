const db = require('../../database').getInstance();

module.exports = async (req, res) => {
    try {
        const OrdersModel = db.getModel('Orders');
        const SalesModel = db.getModel('Sales');
        const AddressesModel = db.getModel('Addresses');

        const {name, surname, middle_name, phone_number, new_post_department_id, goods_ids, userId} = req.body;

        if (userId) {
            const user = await AddressesModel.findOne({where: {user_id: userId}});

            if (user) {
                await user.update({
                    new_post_department_id
                });
            } else {
                await AddressesModel.create({
                    user_id: userId,
                    new_post_department_id
                });
            }
        }

        //TODO payment via Portmone API
        const status = 'pending';

        if (status === 'paid') {
            await SalesModel.create({
                goods_ids,
                user_id: userId
            });
        }
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        await OrdersModel.create({
            name,
            surname,
            middle_name,
            new_post_department_id,
            phone_number,
            status,
            goods_ids
        });

        return res.status(200).send({error: false, message: 'TY PROEBAV 100 GRIVEN ┐( ͡° ʖ̯ ͡°)┌'});
    } catch (e) {
        return res.status(200).send({error: true, message: e.message});
    }
};