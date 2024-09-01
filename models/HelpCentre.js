const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the HelpCentre model
const HelpCentre = db.define('HelpCentre', {
    helpc_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    helpc_first_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    helpc_last_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    helpc_email: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    helpc_phone_no: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    helpc_type: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    helpc_file: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    helpc_message: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    helpc_response_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: 'admin id'
    },
    helpc_created_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'vendor id'
    },
    helpc_created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    helpc_updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    }
}, {
    tableName: 'help_centres',
    timestamps: false
});

export default HelpCentre;
