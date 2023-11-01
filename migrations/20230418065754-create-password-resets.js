/** @format */

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return Promise.all([
			queryInterface.createTable('password_resets', {
				id: {
					allowNull: false,
					primaryKey: true,
					type: Sequelize.UUID,
					defaultValue: Sequelize.UUIDV4,
				},
				user_id: {
					type: Sequelize.UUID,
					allowNull: false,
					references: {
						model: {
							tableName: 'users',
						},
						key: 'id',
					},
					onDelete: 'CASCADE',
				},
				token: {
					type: Sequelize.STRING,
					allowNull: false,
				},
				createdAt: {
					type: Sequelize.DATE,
					allowNull: false,
					defaultValue: new Date(),
				},
			}),
		]);
	},
	async down(queryInterface) {
		return queryInterface.dropTable('password_resets');
	},
};
