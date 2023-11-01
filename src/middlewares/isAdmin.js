/** @format */

const { User } = require('@models/user');
const { Role } = require('@models/role');
const { roles } = require('@src/enums/roles');
const { responseMessages } = require('@src/enums/response-messages');

/* global
errorResponse:readonly
newHttpError:readonly
logger:readonly
*/

const isAdmin = async (req, res, next) => {
	try {
		const { user } = req;
		const dbUser = await User.findOne({
			where: { email: user.email, is_active: true },
			include: Role,
			raw: true,
			nest: true,
		});
		if (dbUser.role.name !== roles.Admin) {
			throw newHttpError(403, responseMessages.authorizationFailed);
		}
	} catch (err) {
		logger.error(err);
		return res
			.status(err?.status)
			.send(errorResponse(err?.message ?? 'Unauthorized', 403));
	}
	return next();
};

module.exports = isAdmin;
