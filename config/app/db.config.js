/** @format */

const getDbConfigurations = () => ({
	DB_HOST: process.env.DATABASE_HOST,
	DB_PORT: process.env.DATABASE_PORT,
	DB_NAME: process.env.DATABASE_NAME,
	DB_USER: process.env.DATABASE_USER,
	DB_PASSWORD: process.env.DATABASE_PASSWORD,
	dialect: 'mysql',
	dialectOptions: {
		bigNumberStrings: false,
	},
	logging: process.env.NODE_ENV === 'development',
	pool: {
		max: 5,
		min: 0,
		acquire: 30_000,
		idle: 10_000,
	},
});

module.exports = getDbConfigurations();
