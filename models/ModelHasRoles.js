const { DataTypes } = require('sequelize');
const db = require('../config/database');

// Define the ModelHasRoles model
const ModelHasRoles = db.define('ModelHasRoles', {
    role_id: {
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
    tableName: 'model_has_roles',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false,
    indexes: [
        {
            name: 'model_has_roles_model_id_model_type_index',
            fields: ['model_id', 'model_type']
        }
    ],
    primaryKey: 'role_id',
    foreignKeys: {
        'model_has_roles_role_id_foreign': {
            name: 'role_id',
            table: 'roles',
            field: 'id',
            onUpdate: 'NO ACTION',
            onDelete: 'CASCADE'
        }
    }
});

export default ModelHasRoles;

