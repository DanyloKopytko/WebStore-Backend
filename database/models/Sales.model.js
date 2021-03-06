const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const User = require('./Users.model')(sequelize, Sequelize);

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
        goods_ids: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            unique: false,
            allowNull: false
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
    Sales.belongsTo(User, {foreignKey: 'user_id'});
    return Sales;
};
