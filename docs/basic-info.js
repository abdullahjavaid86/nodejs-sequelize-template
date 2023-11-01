/** @format */

const pkg = require('../package.json');

module.exports = {
	openapi: '3.0.3', // present supported openapi version
	info: {
		title: 'NodeJs Template', // short title.
		description: 'Collection of all Template APIs', //  desc.
		version: pkg.version, // version number
		contact: {
			name: 'Abdullah Javaid', // your name
			email: 'dev.abdullahjavaid86@gmail.com', // your email
			url: 'https://github.com/abdullahjavaid86', // your website
		},
	},
};
