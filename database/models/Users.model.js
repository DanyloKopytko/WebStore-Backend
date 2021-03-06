module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
        role: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true,
            validate: {
                isIn: [['user', 'admin']]
            },
            defaultValue: 'user',
            set: () => {}
        },
        login: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                is: /^[a-zA-Z0-9!#$%^&*]*$/
            }
        },
        avatar_url: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true
        },
        pass: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        refresh_token: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true
        },
        phone_number: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false,
            validate: {
                is: /\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})?/
            }
        },
        verified: {
            type: DataTypes.BOOLEAN,
            unique: false,
            allowNull: false,
            defaultValue: false
        },
        refreshPass: {
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
        tableName: 'Users',
        timestamps: true
    });

    return Users;
};
