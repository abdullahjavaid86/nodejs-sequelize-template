/** @format */
const basicInfo = require('./basic-info');
const components = require('./components');
const servers = require('./servers');
const tags = require('./tags');
const users = require('./users');

module.exports = {
	...basicInfo,
	...components,
	...servers,
	...tags,
	...users,
};
