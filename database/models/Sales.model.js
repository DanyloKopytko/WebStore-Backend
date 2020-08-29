const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const User = require('./Users.model')(sequelize, Sequelize);
    const Goods = require('./Goods.model')(sequelize, Sequelize);

    const Sales = sequelize.define('Sales', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            unique: false,
            allowNull: true
        },
        good_id: {
            type: DataTypes.INTEGER,
            unique: false,
            allowNull: true
        },
        sell_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.fn('now')
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
        tableName: 'Sales',
        timestamps: true
    });
    Sales.belongsTo(Goods, {foreignKey: 'id'});
    Sales.belongsTo(User, {foreignKey: 'id'});
    return Sales;
};
