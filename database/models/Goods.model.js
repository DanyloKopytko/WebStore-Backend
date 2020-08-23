module.exports = (sequelize, DataTypes) => {
    const Goods = sequelize.define('Goods', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        article: {
            type: DataTypes.INTEGER,
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
        category: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.fn('now')
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.fn('now'),
        },
    }, {
        tableName: 'Goods',
        timestamps: true
    })

    return Goods;
};