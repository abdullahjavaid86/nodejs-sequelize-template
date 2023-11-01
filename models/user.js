/** @format */

const { DataTypes } = require('sequelize');
const { roles } = require('../src/enums/roles');
const { db } = require('../src/db');
const { Role } = require('./role');

const userModel = db.sequelize.define(
	'user',
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		first_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		last_name: {
			type: DataTypes.STRING,
			// allowNull defaults to true
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			indexed: true,
			validate: {
				isEmail: true,
			},
		},
		user_name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			allowNull: false,
			type: DataTypes.TEXT,
		},
		is_active: {
			allowNull: false,
			defaultValue: true,
			type: DataTypes.BOOLEAN,
		},
		role_id: {
			allowNull: false,
			type: DataTypes.UUID,
		},
		image: {
			type: DataTypes.JSON,
			allowNull: true,
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
	},
	{
		indexes: [
			{
				unique: true,
				fields: ['email', 'user_name'],
			},
		],
		// timestamps: true,
		defaultScope: {
			attributes: { exclude: ['password'] },
			order: [['createdAt', 'DESC']],
		},
		scopes: {
			withPassword: {
				attributes: {},
			},
		},
	},
);

userModel.beforeValidate(async (user) => {
	const salesPersonRole = await Role.findOne({
		where: { name: roles.SalesPerson },
	});
	user.role_id = user.role_id || salesPersonRole.id;
});

userModel.belongsTo(Role, {
	foreignKey: 'role_id',
});

module.exports = { User: userModel };
