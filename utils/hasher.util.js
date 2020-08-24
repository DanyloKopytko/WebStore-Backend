const bcrypt = require('bcrypt');

module.exports = async (pass) => await bcrypt.hash(pass, 10);
