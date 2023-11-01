/** @format */

const getDbConfigurations = function () {
	return {
		DB_HOST: process.env.DATABASE_HOST,
		DB_USER: process.env.DATABASE_USER,
		DB_PASSWORD: process.env.DATABASE_PASSWORD,
		DB_NAME: process.env.DATABASE_NAME,
		dialect: 'mysql',
		pool: {
			max: 5,
			min: 0,
			acquire: 30_000,
			idle: 10_000,
		},
	};
};

module.exports = getDbConfigurations();
