/** @format */
const getList = require('./get-list');

module.exports = {
	paths: {
		'/api/v1/users/list': {
			...getList,
		},
		'/api/v1/users/list/{id}': {},
	},
};
