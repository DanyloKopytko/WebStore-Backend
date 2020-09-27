const jwt = require('jsonwebtoken');
const db = require('../../database').getInstance();

module.exports = async (userId) => {
    try {
        const UserModel = db.getModel('Users');

        const accessToken = await jwt.sign({id: userId}, process.env.ACCESS_TOKEN_KEY, {expiresIn: 20});
        const refreshToken = await jwt.sign({id: userId}, process.env.REFRESH_TOKEN_KEY);

        await UserModel.update({refresh_token: refreshToken}, {where: {id: userId}});
        console.log('access: ' + accessToken);
        console.log('refresh: ' + refreshToken);
        return {accessToken, refreshToken};
    } catch (e) {
        console.log(e);
        throw new Error(e.message);
    }
};
