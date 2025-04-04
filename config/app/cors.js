/** @format */

const whitelist = ['http://localhost:3000', 'https://localhost:3000'];
module.exports = whitelist;
exports.corsOptions = {
	origin(origin, callback) {
		if (whitelist.includes(origin) || !origin) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	},
	optionsSuccessStatus: 200,
};
