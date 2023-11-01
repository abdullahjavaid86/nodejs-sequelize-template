/** @format */

const Sequelize = require('sequelize');
const dbConfig = require('../../config/app/db.config');
const logger = require('../helpers/logger');

const sequelize = new Sequelize(
	dbConfig.DB_NAME,
	dbConfig.DB_USER,
	dbConfig.DB_PASSWORD,
	{
		host: dbConfig.DB_HOST,
		dialect: dbConfig.dialect,
		operationsAliases: false,
		pool: {
			max: dbConfig.pool.max,
			min: dbConfig.pool.min,
			acquire: dbConfig.pool.acquire,
			idle: dbConfig.pool.idle,
		},
	},
);

const connectDb = () => {
	sequelize
		.authenticate()
		.then(() => {
			logger.info('Database connection has been established successfully.');
		})
		.catch((error) => {
			logger.error(error);
		});
};

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = { db, connectDb };
