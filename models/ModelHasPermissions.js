const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the ModelHasPermissions model
const ModelHasPermissions = db.define('ModelHasPermissions', {
    permission_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
    },
    model_type: {
        type: DataTypes.STRING(255),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci'
    },
    model_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
    }
}, {
    tableName: 'model_has_permissions',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false,
    indexes: [
        {
            name: 'model_has_permissions_model_id_model_type_index',
            fields: ['model_id', 'model_type']
        }
    ],
    primaryKey: 'permission_id',
    foreignKeys: {
        'model_has_permissions_permission_id_foreign': {
            name: 'permission_id',
            table: 'permissions',
            field: 'id',
            onUpdate: 'NO ACTION',
            onDelete: 'CASCADE'
        }
    }
});

export default ModelHasPermissions;
