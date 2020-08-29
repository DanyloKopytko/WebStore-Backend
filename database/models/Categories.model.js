const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Goods = require('./Goods.model')(sequelize, Sequelize);

    const Categories = sequelize.define('Categories', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
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
        tableName: 'Categories',
        timestamps: true
    });

    Categories.belongsTo(Goods, {foreignKey: 'categories_id'});

    return Categories;
};
