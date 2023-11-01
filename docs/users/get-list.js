/** @format */

module.exports = {
	get: {
		tags: ['Auth APIs'], // operation's tag.
		description: 'Get list of all users', // operation's desc.
		operationId: 'getUsersList',
		parameters: [
			// expected params
			{
				name: 'x-auth-token', // name of param
				in: 'header', // location of param
				schema: {
					type: 'string',
				},
				required: true, // mandatory
				description: 'Authorization token', // short desc.
			},
		],
		responses: {
			// response code
			200: {
				description: 'Users List fetched', // response desc.
				content: {
					// content-type
					'application/json': {
						schema: {
							type: 'array',
							items: {
								$ref: '#/components/schemas/user',
							}, // user data model
						},
					},
				},
			},
			// response code
			403: {
				description: 'Unauthorized', // response desc.
				content: {
					// content-type
					'application/json': {
						schema: {
							$ref: '#/components/schemas/error', // error data model
						},
					},
				},
			},
		}, // unique operation id
	},
};
