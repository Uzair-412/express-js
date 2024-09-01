// Filename: VetCollaborationsInfo.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const VetCollaborationsInfo = db.define('VetCollaborationsInfo', {
    id: {
        type: DataTypes.BIGINT(19),
        primaryKey: true,
        autoIncrement: true,
    },
    first_name: {
        type: DataTypes.STRING(64),
        allowNull: true,
    },
    last_name: {
        type: DataTypes.STRING(64),
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING(64),
        allowNull: true,
    },
    phone: {
        type: DataTypes.STRING(16),
        allowNull: true,
    },
    address: {
        type: DataTypes.STRING(64),
        allowNull: true,
    },
    country_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    state_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    city: {
        type: DataTypes.STRING(32),
        allowNull: true,
    },
    zip_code: {
        type: DataTypes.STRING(16),
        allowNull: true,
    },
    business_name: {
        type: DataTypes.STRING(32),
        allowNull: true,
    },
    page_type: {
        type: DataTypes.ENUM('colorful_ce', 'vet_refs', 'vt_specialist', 'vt_vet_labs', 'speaker', 'free_ce_webinars'),
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'vet_collaborations_info',
    timestamps: false,
});

export default VetCollaborationsInfo;
