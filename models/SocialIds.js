// Filename: SocialId.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const SocialIds = db.define('SocialId', {
    id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    profile_id: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM('Facebook', 'Google'),
        allowNull: false,
        defaultValue: 'Facebook',
    },
    user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'social_ids',
    timestamps: false,
});

export default SocialIds;
