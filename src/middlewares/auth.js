/** @format */

const jwt = require('jsonwebtoken');
const { TOKEN_KEY } = require('@utils/constants');
const { User } = require('@models/user');
const { responseMessages } = require('@src/enums/response-messages');
const { Role } = require('@models/role');

/* global
errorResponse:readonly
newHttpError:readonly
logger:readonly
*/

const verifyToken = async (req, res, next) => {
	const token = req.headers['x-auth-token'];

	if (!token) {
		return res
			.status(401)
			.send(errorResponse(responseMessages.authenticationFailed, 401));
	}
	try {
		const user = jwt.verify(token, TOKEN_KEY);
		const dbUser = await User.findOne({
			where: { email: user.email, is_active: true },
			include: [{ model: Role, attributes: ['name'] }],
			raw: true,
			nest: true,
		});
		if (!dbUser) {
			throw newHttpError(401, responseMessages.accountDeactivated);
		}
		req.user = dbUser;
	} catch (err) {
		logger.error(err);
		return res
			.status(401)
			.send(errorResponse(err?.message ?? 'Unauthorized', 401));
	}
	return next();
};

module.exports = verifyToken;
