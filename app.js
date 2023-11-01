/** @format */

require('module-alias/register');
const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const { connectDb } = require('@src/db');
const setupApp = require('@src');
const logger = require('@utils/logger');
const path = require('path');

const port = process.env.PORT || 9000;

async function setup() {
	setupApp(app);

	// Database connection
	connectDb();

	/* eslint-disable */
	io.on('connection', (socket) => {
		logger.info('someone connected');

		socket.on('disconnect', () => {
			logger.info('someone disconnected');
		});
	});
	/* eslint-enable */

	global.__basedir = path.resolve(__dirname);

	server.listen(port, () => {
		logger.info(`App is running on port: ${port}`);
	});
}

setup();
