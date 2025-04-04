/** @format */

exports.responseMessages = {
	wrongPassword: 'Email or password is incorrect',
	oldPasswordMismatch: 'Old password is incorrect',
	passwordMismatchForJoi: '{{#label}} must be the same as password',
	passwordMismatch: 'Password and confirm password must match',
	userNotFound: 'User not found',
	userIsNotActive: 'Your account has been de-activated',
	invalidResetLink: 'Invalid or expired request',
	emailOrUsernameRequired: 'Email or user_name is required',
	passwordRequired: 'Password cannot be empty',
	guestOperation: 'This operation can only be performed by guest',
	authenticationFailed:
		'Authentication Failed, no token provided or token is invalid or expired',
	authorizationFailed: 'You are not authorize to perform this action',
	accountDeactivated: 'Your account has been deactivated',
	generic: {
		updated: '{{entity}} updated',
		created: '{{entity}} updated',
		deleted: '{{entity}} deleted',
		notFound: '{{entity}} not found',
	},
};
