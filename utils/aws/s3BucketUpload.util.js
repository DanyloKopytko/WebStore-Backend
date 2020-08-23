const { v4 } = require('uuid');

const s3 = require('../../aws');

module.exports = async (type, image, newUser) => {
    try {
        if (image.length > 1) throw new Error('Only 1 image for user allowed');

        const uploadParams = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `${type}/${v4()}.${image.name.split('.')[1]}`,
            Body: image.data,
            ACL: 'public-read'
        };

        await s3.upload(uploadParams, async (e, data) => {
            if (e) throw new Error(e.message);
            await newUser.update({avatar_url: data.Location});
        });
    } catch (e) {
        throw new Error(e.message);
    }
};
