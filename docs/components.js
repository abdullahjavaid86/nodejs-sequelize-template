/** @format */

module.exports = {
	components: {
		schemas: {
			user: {
				type: 'object',
				// id model
				properties: {
					id: {
						type: 'number',
						description: 'Primary key of user',
						example: 1,
					},
					first_name: {
						type: 'string', // data type
						description: 'First name', // desc
						example: 'John', // example of an id
					},
					last_name: {
						type: 'string', // data type
						description: 'Last name', // desc
						example: 'Wick', // example of an id
					},
					email: {
						type: 'string', // data type
						description: 'Email of the user', // desc
						example: 'abc@mail.com', // example of an id
					},
					password: {
						type: 'string', // data type
						description: 'Password of the user', // desc
						example: '123456', // example of an id
					},
					user_name: {
						type: 'string',
						description: 'User name of the user',
						example: 'abc123',
					},
					is_active: {
						type: 'boolean',
						description: 'Either user can login',
						example: 'true',
					},
					role_id: {
						type: 'string',
						description: 'reference key from roles table',
						example: '1231-123-123123',
					},
					image: {
						type: 'object',
						description:
							'Image object containing image url and other info',
						properties: {
							name: {
								type: 'string',
								description: 'image name',
							},
							size: {
								type: 'number',
								description: 'image size',
							},
							url: {
								type: 'string',
								description: 'image url',
							},
							type: {
								type: 'string',
								description: 'image extension',
							},
							height: {
								type: 'number',
								description: 'image height',
							},
							width: {
								type: 'number',
								description: 'image width',
							},
							resized: {
								type: 'string',
								description: 'resized image url',
							},
						},
					},
					createdAt: {
						type: 'timestamp',
						description:
							'When the record has been entered in the database',
						example: '2023-04-17 09:08:33',
					},
					updatedAt: {
						type: 'timestamp',
						description:
							'When the record has been updated in the database',
						example: '2023-04-17 09:08:33',
					},
				},
			},
			error: {
				type: 'object',
				properties: {
					success: {
						type: 'boolean',
						example: false,
					},
					code: {
						type: 'number',
						example: 403,
					},
					error: {
						type: 'string',
						example: 'Unauthorized, token not provided',
					},
					data: {
						type: {
							oneOf: [
								{
									type: 'array',
								},
								{
									type: 'object',
								},
								{ type: null },
							],
						},
					},
				},
			},
		},
	},
};
