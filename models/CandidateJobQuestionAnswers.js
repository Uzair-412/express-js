import { DataTypes } from 'sequelize';
import db from "@lib/db";

const CandidateJobQuestionAnswers = db.define('CandidateJobQuestionAnswers', {
    id: {
        type: DataTypes.INTEGER(10),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    customer_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    question_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    answer: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW,
        allowNull: true
    }
}, {
    tableName: 'candidate_job_question_answers',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default CandidateJobQuestionAnswers;
