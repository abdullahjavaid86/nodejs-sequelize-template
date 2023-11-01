/** @format */

const { Role } = require('../models/role');

/** @type {import('sequelize-cli').Migration} */
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
		return Role.bulkCreate([
			{
				name: 'Admin',
			},
			{
				name: 'Sales Person',
			},
			{
				name: 'Customer',
			},
		]);
	},

	async down(queryInterface) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		return queryInterface.bulkDelete('roles', null, {});
	},
};
