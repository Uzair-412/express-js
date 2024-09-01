import { DataTypes } from 'sequelize';
import db from "@lib/db";

// Define the CentralUser model
const CentralUser = db.define('CentralUser', {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    uuid: {
        type: DataTypes.CHAR(36),
        allowNull: true
    },
    first_name: {
        type: DataTypes.STRING(191),
        allowNull: true
    },
    last_name: {
        type: DataTypes.STRING(191),
        allowNull: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(191),
        allowNull: false,
        unique: true
    },
    contact_number: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    date_of_birth: {
        type: DataTypes.DATE,
        allowNull: true
    },
    avatar_type: {
        type: DataTypes.STRING(191),
        defaultValue: 'gravatar',
        allowNull: false
    },
    avatar_location: {
        type: DataTypes.STRING(191),
        allowNull: true
    },
    email_verified_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING(191),
        allowNull: true
    },
    password_changed_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    active: {
        type: DataTypes.TINYINT.UNSIGNED,
        defaultValue: 1,
        allowNull: false
    },
    confirmation_code: {
        type: DataTypes.STRING(191),
        allowNull: true
    },
    confirmed: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
        allowNull: false
    },
    timezone: {
        type: DataTypes.STRING(191),
        allowNull: true
    },
    last_login_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    last_login_ip: {
        type: DataTypes.STRING(191),
        allowNull: true
    },
    to_be_logged_out: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
        allowNull: false
    },
    provider: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    provider_id: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    remember_token: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    group_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 1,
        allowNull: true
    },
    type: {
        type: DataTypes.STRING(64),
        defaultValue: 'customer',
        allowNull: true
    },
    level: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false
    },
    device_token: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    vetandtech: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
        allowNull: true
    },
    dvm_central: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
        allowNull: true
    },
    vt_friends: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
        allowNull: true
    },
    allow_on_vetandtech: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
        allowNull: true
    },
    allow_on_dvm: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
        allowNull: true
    },
    allow_on_vt_friend: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
        allowNull: true
    },
    last_online_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    deleted_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'central_users',
    timestamps: false
});

export default CentralUser;
