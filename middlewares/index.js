module.exports = {
    expectedFields: require('./expectedFields.middleware'),
    userExist: require('./userExist.middleware'),
    passValidator: require('./passValidator.middleware'),
    loginOrMail: require('./loginOrMail.middleware'),
    checkAccessToken: require('./checkAccessToken.middleware'),
    isAdmin: require('./isAdmin.middleware'),
    signedInCheck: require('./signedInCheck.middleware')
};
