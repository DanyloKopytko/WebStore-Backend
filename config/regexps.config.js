module.exports = {
    pass: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})/,
    email: /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/
};
