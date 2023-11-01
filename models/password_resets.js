/** @format */

const { DataTypes } = require('sequelize');
const { db } = require('../src/db');

const passwordReset = db.sequelize.define(
	'password_reset',
	{
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
		},
		user_id: {
			type: DataTypes.UUID,
			allowNull: false,
		},
		token: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		createdAt: {
			allowNull: false,
			type: DataTypes.DATE,
			defaultValue: new Date(),
		},
	},
	{ updatedAt: false, timestamps: true },
);

module.exports = { passwordReset };
