const s3 = require('../../aws');

module.exports = async (type, photoUrl, entity) => {
    try {
        let newPhotos;

        newPhotos = type === 'users' ? entity.avatar_url : entity.photo_url.filter(item => item !== photoUrl);

        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `${type}/${photoUrl.split('/')[4]}`
        };

        s3.deleteObject(params, e => e && new Error(e.message));

        await entity.update({photo_url: newPhotos});

        return newPhotos;
    } catch (e) {
        console.log(e);
        throw new Error(e.message);
    }
};
