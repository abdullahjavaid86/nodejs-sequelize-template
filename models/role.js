/** @format */

const { DataTypes } = require('sequelize');
const { db } = require('../src/db');

const Role = db.sequelize.define('role', {
	id: {
		allowNull: false,
		primaryKey: true,
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	createdAt: {
		allowNull: false,
		type: DataTypes.DATE,
		defaultValue: new Date(),
	},
	updatedAt: {
		allowNull: true,
		type: DataTypes.DATE,
	},
});

module.exports = { Role };
