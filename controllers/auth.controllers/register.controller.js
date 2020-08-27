const db = require('../../database').getInstance();

const { hasher, mailer, aws } = require('../../utils');

module.exports = async (req, res) => {
    try {
        const {name, surname, login, email, pass, phone_number} = req.body;

        const UserModel = db.getModel('Users');

        const hash = await hasher(pass);

        const newUser = await UserModel.create({
            name,
            surname,
            login,
            pass: hash,
            email,
            phone_number
        }, {returning: true});

        await aws.s3BucketUpload('users', req.files.image, newUser);

        await mailer('Registration completed', 'THANK YOU FOR REGISTRATION', email);

        return res.status(200).send({error: false, message: 'Registration successful'});
    } catch (e) {
        console.log(e);
        res.status(200).send({error: true, message: e.message});
    }
};
