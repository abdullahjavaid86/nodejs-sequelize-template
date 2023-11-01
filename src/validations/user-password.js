/** @format */

const Joi = require('joi');

const Schema = Joi.object({
	old_password: Joi.string().required(),
	password: Joi.string()
		.min(8)
		.max(20)
		.disallow(Joi.ref('old_password'))
		.required(),
	password_confirmation: Joi.string()
		.min(8)
		.max(20)
		.valid(Joi.ref('password'))
		.required()
		.options({
			messages: { 'any.only': '{{#label}} must match password' },
		}),
});

exports.userPasswordUpdateValidation = Schema;
