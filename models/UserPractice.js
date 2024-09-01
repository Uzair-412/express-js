// Filename: UserPractice.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const UserPractice = db.define('UserPractice', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    practice_name: {
        type: DataTypes.STRING(100),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    phone: {
        type: DataTypes.STRING(20),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    website: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    practice_type: {
        type: DataTypes.STRING(60),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    animals_treated: {
        type: DataTypes.STRING(50),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    postal_address: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    postal_address_line_one: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    postal_address_line_two: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    postal_address_line_three: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    postal_address_line_four: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    postal_city: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    postal_country: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    postal_state: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    postal_post_code: {
        type: DataTypes.STRING(7),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    billing_address: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    billing_address_line_one: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    billing_address_line_two: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    billing_address_line_three: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    billing_address_line_four: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    billing_city: {
        type: DataTypes.STRING(100),
        allowNull: true,
        collate: 'latin1_swedish_ci',
    },
    billing_country: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    billing_state: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    billing_post_code: {
        type: DataTypes.STRING(7),
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
    tableName: 'user_practice',
    timestamps: false,
});

export default UserPractice;
