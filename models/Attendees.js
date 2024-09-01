import db from "@lib/db";
import { DataTypes } from "sequelize";

const Attendees = db.define('attendees', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    user: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: null,
    },
    job_title: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
    },
    institute: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
    },
    profile: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
    },
    profession: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
    },
    classification: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
    },
    specialty: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
    },
    employer_type: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
    },
    practice_role: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
    },
    vets_in_practice: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: true,
        defaultValue: null,
    },
    techs_in_practice: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: true,
        defaultValue: null,
    },
    practice_revenue: {
        type: DataTypes.STRING(16),
        allowNull: true,
        defaultValue: null,
    },
    practices_in_group: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
    },
    credentials: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
    },
    website: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    phone: {
        type: DataTypes.STRING(32),
        allowNull: true,
        defaultValue: null,
    },
    mobile: {
        type: DataTypes.STRING(32),
        allowNull: true,
        defaultValue: null,
    },
    address: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    city: {
        type: DataTypes.STRING(128),
        allowNull: true,
        defaultValue: null,
    },
    state: {
        type: DataTypes.STRING(64),
        allowNull: true,
        defaultValue: null,
    },
    zip: {
        type: DataTypes.STRING(32),
        allowNull: true,
        defaultValue: null,
    },
    country: {
        type: DataTypes.STRING(16),
        allowNull: true,
        defaultValue: null,
    },
    sm_facebook: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    sm_linkedin: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    sm_twitter: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    sm_instagram: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    sm_pinterest: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    sm_youtube: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    sm_vimeo: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null,
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y',
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
    },
}, {
    tableName: 'attendees',
    timestamps: false,
});

export default Attendees;