/** @format */

const { Op } = require('sequelize');
const logger = require('@utils/logger');
const { getPagination, pagination } = require('@utils/utils');
const { checkIfQueryParamIsTrue } = require('@utils/functions');
const { Role } = require('@root/models/role');

/* global
successResponse:readonly
errorResponse:readonly
*/

exports.get = async (req, res) => {
	try {
		const { page, perPage, all } = req.query;
		const requestForAll = checkIfQueryParamIsTrue(all);
		const { limit, offset } = getPagination(page, perPage);
		const roles = await Role.findAndCountAll({
			where: {
				name: { [Op.not]: 'Admin' },
			},
			limit: requestForAll ? undefined : limit,
			offset: requestForAll ? undefined : offset,
			attributes: ['id', 'name'],
			order: [['createdAt', 'DESC']],
			distinct: true,
		});

		res.status(200).send(
			successResponse({
				data: requestForAll ? roles.rows : pagination(page, limit, roles),
			}),
		);
	} catch (e) {
		res
			.status(e?.status ?? 500)
			.send(errorResponse(e.message, e?.status ?? 500));
		logger.error(e);
	}
};
