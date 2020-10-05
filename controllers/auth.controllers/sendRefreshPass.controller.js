const db = require('../../database').getInstance();

const mailer = require('../../utils/mailer.util');

module.exports = async (req, res) => {
    try {
        const UserModel = db.getModel('Users');
        const { userEmail } = req.body;

        const user = await UserModel.findOne({where: {email: userEmail}});

        await mailer('Refresh password',
            '<h1>If you have not submitted a password recovery request, just predict this message</h1>' +
            `<p>Please verify your E-mail by following this <a href="http://localhost:3001/refreshPass/${user.refreshPass}">link</a></p>`, userEmail);

        res.status(200).send({error: false, message: 'E-mail sent'});
    } catch (e) {
        console.log(e);
        res.status(400).send({error: true, message: 'Oops something went wrong!'});
    }
};