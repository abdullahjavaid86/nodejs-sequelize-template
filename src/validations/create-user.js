/** @format */

const Joi = require('joi');

const Schema = Joi.object({
	first_name: Joi.string().max(40).required(),
	last_name: Joi.string().max(40).required(),
	email: Joi.string().max(150).required(),
	user_name: Joi.string().max(30).required(),
	is_active: Joi.boolean(),
	role_id: Joi.string(),
});

exports.userCreateSchema = Schema;
