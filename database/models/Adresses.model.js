module.exports = (sequelize, DataTypes) => {
    const User = sequelize.import('./Users.model')
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
            allowNull: false,
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
        }
    })
    Addresses.belongsTo(User, {foreignKey: 'user_id'})
    return Addresses;
}