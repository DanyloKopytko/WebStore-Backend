module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define('Orders', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        goods_ids: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'pending'
        },
        new_post_department_id: {
            type: DataTypes.INTEGER,
            unique: false,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        middle_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})?/
            }
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
        tableName: 'Orders',
        timestamps: true
    });

    return Orders;
};
