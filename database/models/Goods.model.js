const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Categories = require('./Categories.model')(sequelize, Sequelize);

    const Goods = sequelize.define('Goods', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        article: {
            type: DataTypes.BIGINT,
            unique: true,
            allowNull: false
        },
        naming: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true
        },
        characteristics: {
            type: DataTypes.JSONB,
            unique: false,
            allowNull: false
        },
        count: {
            type: DataTypes.INTEGER,
            unique: false,
            allowNull: true
        },
        price: {
            type: DataTypes.NUMERIC,
            unique: false,
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER,
            unique: false,
            allowNull: true,
            foreignKey: true
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
        tableName: 'Goods',
        timestamps: true
    });

    Goods.belongsTo(Categories, {foreignKey: 'category_id'});

    return Goods;
};
