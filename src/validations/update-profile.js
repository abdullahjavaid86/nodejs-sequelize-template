/** @format */

const Joi = require('joi');

const Schema = Joi.object({
	first_name: Joi.string().max(40).required(),
	last_name: Joi.string().max(40).required(),
	image: Joi.any(),
});

exports.userProfileUpdate = Schema;
