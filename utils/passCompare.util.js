const bcrypt = require('bcrypt');

module.exports = async (passFromDb, passFromClient) => {
    let resultOfComparing = false;
    await bcrypt.compare(passFromDb, passFromClient, () => {
        resultOfComparing = true;
    }).catch(() => resultOfComparing = false);
    return resultOfComparing;
};