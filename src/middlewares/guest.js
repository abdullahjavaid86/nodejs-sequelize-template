/** @format */

const { responseMessages } = require('@src/enums/response-messages');
const jwt = require('jsonwebtoken');
const { TOKEN_KEY } = require('../helpers/constants');

/* global
errorResponse:readonly
*/

const guest = async (req, res, next) => {
	const token = req.headers['x-auth-token'];

	try {
		jwt.verify(token, TOKEN_KEY);
		if (token) {
			return res
				.status(403)
				.send(errorResponse(responseMessages.guestOperation, 403));
		}
		return next();
	} catch (e) {
		return next();
	}
};

module.exports = guest;
