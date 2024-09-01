// Filename: UserFamilyRelationships.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const UserFamilyRelationships = db.define('UserFamilyRelationships', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    type: {
        type: DataTypes.ENUM('familymember', 'ownstatus'),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    family_member: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    relationship: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'user_family_relationships',
    timestamps: false,
});

export default UserFamilyRelationships;
