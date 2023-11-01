/** @format */

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable(
			'users',
			{
				id: {
					type: Sequelize.UUID,
					primaryKey: true,
					defaultValue: Sequelize.UUIDV4,
				},
				first_name: {
					type: Sequelize.STRING,
					allowNull: false,
				},
				last_name: {
					type: Sequelize.STRING,
					// allowNull defaults to true
				},
				email: {
					type: Sequelize.STRING,
					allowNull: false,
					unique: true,
					indexed: true,
					validate: {
						isEmail: true,
					},
				},
				user_name: {
					type: Sequelize.STRING,
					allowNull: false,
					unique: true,
				},
				image: {
					type: Sequelize.JSON,
					allowNull: true,
				},
				is_active: {
					type: Sequelize.BOOLEAN,
					allowNull: false,
					defaultValue: true,
				},
				role_id: {
					type: Sequelize.UUID,
					allowNull: false,
					references: {
						model: {
							tableName: 'roles',
						},
						key: 'id',
					},
					onDelete: 'CASCADE',
				},
				password: {
					allowNull: false,
					type: Sequelize.TEXT,
				},
				createdAt: {
					allowNull: false,
					type: Sequelize.DATE,
					defaultValue: new Date(),
				},
				updatedAt: {
					allowNull: true,
					type: Sequelize.DATE,
				},
			},
			{
				timestamps: true,
				indexes: [{ unique: true, fields: ['email', 'user_name'] }],
			},
		);
	},
	async down(queryInterface) {
		await queryInterface.dropTable('users');
	},
};
