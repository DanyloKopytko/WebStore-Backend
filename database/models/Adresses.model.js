const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const User = require('./Users.model')(sequelize, Sequelize);

    const Addresses = sequelize.define('Addresses', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false
        },
        region: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        street: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        house_number: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        apart_number: {
            type: DataTypes.INTEGER,
            unique: false,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.fn('now')
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.fn('now')
        }
    }, {
        tableName: 'Addresses',
        timestamps: true
    });
    Addresses.belongsTo(User, {foreignKey: 'user_id'});
    return Addresses;
};
