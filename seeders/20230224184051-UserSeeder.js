/** @format */

/** @type {import('sequelize-cli').Migration} */
const { hash } = require('bcrypt');
const { User } = require('../models/user');
const { Role } = require('../models/role');

module.exports = {
	async up() {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		const adminRole = await Role.findOne({ where: { name: 'Admin' } });
		if (!adminRole) {
			throw new Error(
				'Make sure you have seeded roles into database and the admin role exists',
			);
		}
		return User.create({
			first_name: 'John',
			last_name: 'Wick',
			email: 'john@wick.com',
			user_name: 'john_wick',
			role_id: adminRole.id,
			password: await hash('password', 10),
		});
	},

	// eslint-disable-next-line
	async down(queryInterface) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		return queryInterface.bulkDelete('users', null, {});
	},
};
