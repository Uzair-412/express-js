const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the Family model
const Family = db.define('Family', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: true
    },
    slug: {
        type: DataTypes.STRING(128),
        allowNull: true
    },
    pos: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: 0
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'families',
    collate: 'latin1_swedish_ci',
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ['slug']
        }
    ]
});

export default Family;
