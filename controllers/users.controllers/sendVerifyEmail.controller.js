const jwt = require('jsonwebtoken');

const mailer = require('../../utils/mailer.util');

module.exports = async (req, res) => {
    try {
        const {userId, userEmail} = req.body;
        const mailToken = await jwt.sign({id: userId}, process.env.ACCESS_TOKEN_KEY, {expiresIn: 120});

        await mailer('Verify E-mail',
            '<h1>Verify your E-mail</h1>' +
            `<p>Please verify your E-mail by following this <a href="http://localhost:3001/verifyEmail/${mailToken}">link</a></p>`, userEmail);

        res.status(200).send({error: false, message: 'E-mail sent'});
    } catch (e) {
        console.log(e);
        res.status(400).send({error: true, message: 'Oops something went wrong!'});
    }
};