module.exports = {
    register: require('./register.controller'),
    login: require('./login.controller'),
    getUserByAccessToken: require('./getUserByAccessToken.controller'),
    refreshTokens: require('./refreshTokens.controller')
};
