const db = require('../../database').getInstance();

const { aws } = require('../../utils');

module.exports = async (req, res) => {
    try {
        const {image} = req.files;

        const UserModel = db.getModel('Users');

        const user = await UserModel.findByPk(req.body.userId);

        const newPhoto = await aws.s3BucketDelete('users', req.body.photoUrl, user);
        await aws.s3BucketUpload('users', image, user);

        return res.status(200).send({error: false, newPhoto});
    } catch (e) {
        console.log(e);
        res.status(200).send({error: true, message: 'Oops something went wrong'});
    }
};
