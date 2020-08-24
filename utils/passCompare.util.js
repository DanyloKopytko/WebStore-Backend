const bcrypt = require('bcrypt');

module.exports = async (passFromDb, passFromClient) => new Promise(async (resolve, reject) => {
    await bcrypt.compare(passFromClient, passFromDb, (err, result) => {
        result ? resolve(result) : reject(result);
    });
});