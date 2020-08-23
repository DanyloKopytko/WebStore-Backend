module.exports = (sequelize, DataTypes) => {
    const User = sequelize.import('./Users.model');
    const Goods = sequelize.import('./Goods.model');

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
        }
    })
    Sales.belongsTo(Goods, {foreignKey: 'good_id'})
    Sales.belongsTo(User, {foreignKey: 'user_id'})
    return Sales
};