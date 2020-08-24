const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

module.exports = (() => {
    let instance;

    function initConnection() {
        const sequelize = new Sequelize('postgres', 'postgres', process.env.DB_PASSWORD, {host: process.env.DB_HOST, dialect: 'postgres'});

        const models = {};

        function getModels() {
            fs.readdir('./database/models', async (err, file) => {
                file.forEach(file => {
                    const [modelName] = file.split('.');
                    models[modelName] = require(path.resolve(`./database/models/${modelName}.model`))(sequelize, Sequelize.DataTypes);
                });
                await sequelize.sync({ force: false });
            });
        }

        return {
            setModels: () => getModels(),
            getModel: modelName => models[modelName]
        };
    }

    return {
        getInstance: () => {
            if (!instance) instance = initConnection();
            return instance;
        }
    };
})();
