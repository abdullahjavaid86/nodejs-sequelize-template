/** @format */

const fs = require('fs');
const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const swaggerUI = require('swagger-ui-express');

const logger = require('@utils/logger');
const { newHttpError } = require('@src/errors/error');
const docs = require('@root/docs');
const { successResponse, errorResponse } = require('@utils/http_response');
const { corsOptions } = require('@root/config/app/cors');
const rateLimiter = require('@src/middlewares/rete-limiter');
const whitelist = require('@root/config/app/cors');
const routes = require('./routes');

const uploadDir = './uploads';
const uploadResizedDir = './uploads/resized';

const setupApp = (app) => {
	// ! Rest API security
	app.use(
		helmet({
			crossOriginResourcePolicy: false,
		}),
	);

	if (!fs.existsSync(uploadDir)) {
		fs.mkdirSync(uploadDir);
	}

	if (!fs.existsSync(uploadResizedDir)) {
		fs.mkdirSync(uploadResizedDir);
	}

	// ? API rate limiter
	app.use(rateLimiter.prevent);

	// * request methods
	app.use(express.json({ limit: '50mb' }));
	app.use(express.urlencoded({ extended: true, limit: '50mb' }));

	app.use(cookieParser());

	// * cors and logs
	app.options(whitelist);
	app.use(cors(corsOptions));
	app.use(morgan('combined', { stream: logger.stream }));

	// * Static routes
	app.use('/uploads', express.static(uploadDir));
	app.use('/uploads/resized', express.static(uploadResizedDir));
	/**
	 * * Swagger UI
	 * TODO: List all the api request to swagger UI
	 */
	app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));
	app.use(routes);

	process.on('uncaughtException', (reason, promise) => {
		logger.error(`Uncaught Exception due to: ${reason}`, promise);
		// TODO: implement process.exit(1)
	});

	process.on('unhandledRejection', (reason, promise) => {
		logger.error(`Unhandled Rejection due to: ${reason}`, promise);
		throw reason;
	});

	process.on('SIGINT', () => {
		logger.info('Alright! Bye bye!');
		process.exit();
	});

	global.successResponse = successResponse;
	global.errorResponse = errorResponse;
	global.newHttpError = newHttpError;
	global.logger = logger;
};

module.exports = setupApp;
