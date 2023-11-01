/** @format */

const { Op } = require('sequelize');
const logger = require('@utils/logger');
const { User } = require('@models/user');
const bcrypt = require('bcrypt');
const { getPagination, pagination } = require('@utils/utils');
const { userCreateSchema } = require('@validations/create-user');
const { userProfileUpdate } = require('@validations/update-profile');
const { responseMessages } = require('@src/enums/response-messages');
const {
	randomString,
	prepareFileObjectForDatabase,
} = require('@root/src/helpers/functions');
const { Role } = require('@root/models/role');
const { newUserEmail } = require('@root/src/emails/new-user');
const sendEmail = require('@root/src/helpers/sendEmail');

/* global
successResponse:readonly
errorResponse:readonly
newHttpError:readonly
*/

exports.get = async (req, res) => {
	try {
		const { page, perPage } = req.query;
		const { limit, offset } = getPagination(page, perPage);
		const users = await User.findAndCountAll({
			where: {
				id: { [Op.not]: req.user.id },
			},
			limit,
			offset,
			include: [{ model: Role, attributes: ['name'] }],
			order: [['createdAt', 'DESC']],
			distinct: true,
		});

		res.status(200).send(
			successResponse({
				data: pagination(page, limit, users),
			}),
		);
	} catch (e) {
		res
			.status(e?.status ?? 500)
			.send(errorResponse(e.message, e?.status ?? 500));
		logger.error(e);
	}
};

exports.show = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findByPk(id);
		if (!user) throw newHttpError(404, responseMessages.userNotFound);
		res.status(200).send(
			successResponse({
				data: user,
			}),
		);
	} catch (e) {
		res
			.status(e?.status ?? 500)
			.send(errorResponse(e.message, e?.status ?? 500));
		logger.error(e);
	}
};

exports.create = async (req, res) => {
	try {
		const { body, file } = req;
		await userCreateSchema.validateAsync(body);
		const password = randomString();
		const user = await User.create({
			first_name: body.first_name,
			last_name: body.last_name,
			email: body.email.toLowerCase(),
			user_name: body.user_name.toLowerCase(),
			is_active: body.is_active,
			role_id: body.role_id,
			password: await bcrypt.hash(password, 10),
			image: file ? prepareFileObjectForDatabase(file) : null,
		});
		sendEmail(
			body.email,
			'Account created',
			newUserEmail(user.user_name, user.email, password),
			true,
		);
		res.status(200).send(successResponse({ data: user }));
	} catch (e) {
		res
			.status(e?.status ?? 500)
			.send(errorResponse(e.message, e?.status ?? 500));
		logger.error(e);
	}
};

exports.update = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findByPk(id);
		if (!user) throw newHttpError(404, responseMessages.userNotFound);
		const { body, file } = req;
		await userProfileUpdate.validateAsync(body);
		user.update({
			first_name: body.first_name,
			last_name: body.last_name,
			image: file ? prepareFileObjectForDatabase(file) : undefined,
		});
		res.status(200).send(successResponse({ data: user }));
	} catch (e) {
		res
			.status(e?.status ?? 500)
			.send(errorResponse(e.message, e?.status ?? 500));
		logger.error(e);
	}
};

exports.delete = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findByPk(id);
		if (!user) throw newHttpError(404, responseMessages.userNotFound);
		user.destroy();
		res.status(200).send(successResponse());
	} catch (e) {
		res
			.status(e?.status ?? 500)
			.send(errorResponse(e.message, e?.status ?? 500));
		logger.error(e);
	}
};

exports.activate = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findByPk(id);
		if (!user) throw newHttpError(404, responseMessages.userNotFound);
		user.update({
			is_active: true,
		});
		res.status(200).send(successResponse({ data: user }));
	} catch (e) {
		res
			.status(e?.status ?? 500)
			.send(errorResponse(e.message, e?.status ?? 500));
		logger.error(e);
	}
};

exports.deActivate = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findByPk(id);
		if (!user) throw newHttpError(404, responseMessages.userNotFound);
		user.update({
			is_active: false,
		});
		res.status(200).send(successResponse({ data: user }));
	} catch (e) {
		res
			.status(e?.status ?? 500)
			.send(errorResponse(e.message, e?.status ?? 500));
		logger.error(e);
	}
};
