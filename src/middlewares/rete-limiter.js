/** @format */

const expressBrute = require('express-brute');
const sequelizeStore = require('express-brute-sequelize');

const { appInDevelopment } = require('@utils/functions');
const { db } = require('@src/db');
/* global
errorResponse:readonly
*/
const bruteStore = appInDevelopment()
	? new expressBrute.MemoryStore()
	: new sequelizeStore(db.sequelize, 'brute_store', {}, (store) => store);

const failCallback = (_req, res, _next, nextValidRequestDate) => {
	res.status(429).send(
		errorResponse(
			`Too many attempts, please wait for some time: ${nextValidRequestDate}`,
			429,
		),
	);
};

const rateLimiter = new expressBrute(bruteStore, {
	freeRetries: 120,
	failCallback,
	lifetime: 60,
	minWait: 121 * 1000, // 1 minute (should never reach this wait time)
	maxWait: 121 * 1000, // 1 minute (should never reach this wait time)
	refreshTimeoutOnRequests: true,
});

module.exports = rateLimiter;
