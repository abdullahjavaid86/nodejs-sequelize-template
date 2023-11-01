/** @format */

/* eslint-disable */
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');

const basename = path.basename(__filename);
const config = require(`../config/config`);
const db = {};

const sequelize = config.use_env_variable
	? new Sequelize(process.env[config.use_env_variable], config)
	: new Sequelize(config.database, config.username, config.password, config);

fs.readdirSync(__dirname)
	.filter(
		(file) =>
			file.startsWith('.') &&
			file !== basename &&
			file.endsWith('.js') &&
			!file.includes('.test.js'),
	)
	.forEach((file) => {
		const model = require(path.join(__dirname, file))(
			sequelize,
			Sequelize.DataTypes,
		);
		db[model.name] = model;
	});

Object.keys(db).forEach((modelName) => {
	db[modelName].init(sequelize);
	if ('associate' in db[modelName]) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
