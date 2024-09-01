const { DataTypes } = require('sequelize');
const db = require('../config/database');

const User = db.define('User', {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    uuid: {
        type: DataTypes.CHAR(36),
        allowNull: true,
        defaultValue: null,
    },
    first_name: {
        type: DataTypes.STRING(191),
        allowNull: true,
        defaultValue: null,
    },
    last_name: {
        type: DataTypes.STRING(191),
        allowNull: true,
        defaultValue: null,
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    email: {
        type: DataTypes.STRING(191),
        allowNull: false,
        unique: true,
    },
    username: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    summary: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
    },
    address: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    gender: {
        type: DataTypes.ENUM('Male', 'Female', 'other', 'Don\'t want to specify'),
        allowNull: true,
        defaultValue: 'Don\'t want to specify',
    },
    pet_parent: {
        type: DataTypes.ENUM('yes', 'no'),
        allowNull: false,
        defaultValue: 'no',
    },
    dob: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    bio: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    intro_video: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    website: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    country_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
    },
    country_name: {
        type: DataTypes.STRING(64),
        allowNull: true,
        defaultValue: null,
    },
    state_name: {
        type: DataTypes.STRING(64),
        allowNull: true,
        defaultValue: null,
    },
    state: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
    },
    phone: {
        type: DataTypes.STRING(20),
        allowNull: true,
        defaultValue: null,
    },
    coins: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    vetandtech: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 0,
    },
    dvm_central: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 0,
    },
    vt_friends: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 0,
    },
    registered_from: {
        type: DataTypes.ENUM('dvm_central', 'vetandtech', 'vt_friends'),
        allowNull: true,
        defaultValue: null,
    },
    register_from_colorful: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 0,
    },
    allow_on_vetandtech: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 0,
    },
    allow_on_search_a_vet: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 0,
    },
    allow_on_dvm: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 0,
    },
    allow_on_vt_friend: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 0,
    },
    avatar_type: {
        type: DataTypes.STRING(191),
        allowNull: false,
        defaultValue: 'gravatar',
    },
    avatar_location: {
        type: DataTypes.STRING(191),
        allowNull: true,
        defaultValue: null,
    },
    vet_dvm_profile_image: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
    },
    cover_image: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    total_followers: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    total_following: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    email_verified_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    password: {
        type: DataTypes.STRING(191),
        allowNull: true,
        defaultValue: null,
    },
    password_changed_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    active: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        defaultValue: 1,
    },
    confirmation_code: {
        type: DataTypes.STRING(191),
        allowNull: true,
        defaultValue: null,
    },
    confirmed: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
    },
    soft_delete: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    permanently_deleted: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 0,
    },
    timezone: {
        type: DataTypes.STRING(191),
        allowNull: true,
        defaultValue: null,
    },
    last_login_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    last_login_ip: {
        type: DataTypes.STRING(191),
        allowNull: true,
        defaultValue: null,
    },
    ip_address: {
        type: DataTypes.STRING(64),
        allowNull: true,
        defaultValue: null,
    },
    browser: {
        type: DataTypes.STRING(64),
        allowNull: true,
        defaultValue: null,
    },
    operating_system: {
        type: DataTypes.STRING(64),
        allowNull: true,
        defaultValue: null,
    },
    user_Agent: {
        type: DataTypes.STRING(32),
        allowNull: true,
        defaultValue: null,
    },
    to_be_logged_out: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
    },
    provider: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    provider_id: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    remember_token: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: null,
    },
    access_token: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
    },
    group_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: 1,
    },
    type: {
        type: DataTypes.STRING(64),
        allowNull: true,
        defaultValue: 'customer',
    },
    level: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
    device_token: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
    },
    accept_terms: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    // cart_items: {
    //     type: DataTypes.JSON,
    //     allowNull: true,
    //     defaultValue: null,
    // },
    // cashback: {
    //     type: DataTypes.DECIMAL(16, 2),
    //     allowNull: true,
    //     defaultValue: '0.00',
    // },
    last_online_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    position: {
        type: DataTypes.STRING(32),
        allowNull: true,
        defaultValue: null,
    },
    clinic_name: {
        type: DataTypes.STRING(32),
        allowNull: true,
        defaultValue: null,
    },
    clinic_phone_number: {
        type: DataTypes.STRING(32),
        allowNull: true,
        defaultValue: null,
    },
    promo_code: {
        type: DataTypes.STRING(32),
        allowNull: true,
        defaultValue: null,
    },
    practice_name: {
        type: DataTypes.STRING(32),
        allowNull: true,
        defaultValue: null,
    },
    access_control: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: null,
    },
    zip_code: {
        type: DataTypes.STRING(10),
        allowNull: true,
        defaultValue: null,
    },
    city: {
        type: DataTypes.STRING(64),
        allowNull: true,
        defaultValue: null,
    },
    email_event_reminder: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 0,
    },
    email_general_info: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 0,
    },
    email_marketing_events_courses: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 0,
    },
    allow_docs_upload: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y',
    },
    allowed_docs_submission: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 5,
    },
    coins_conversion: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    coins_per_page: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: null,
    },
    pending_order: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
    },
    resume_file: {
        type: DataTypes.STRING(64),
        allowNull: true,
        defaultValue: null,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW,
    }
}, {
    tableName: 'users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = User;