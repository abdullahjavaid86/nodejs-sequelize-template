/** @format */

const { replace } = require('lodash');
const fs = require('fs');
const { responseMessages } = require('../enums/response-messages');

/* global
 __basedir
 */

/**
 *
 * @param {number} length
 * @returns {string}
 */
exports.randomString = (length = 10) => {
	let result = '';
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@/;$%*()^_';
	const charactersLength = characters.length;
	let counter = 0;
	while (counter < length) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
		counter += 1;
	}
	return result;
};

/**
 * @param {Record<string, string | number>} file
 * @param {boolean} hasResizedImage
 */
exports.prepareFileObjectForDatabase = (file, hasResizedImage = false) => {
	let resizedImage;
	if (hasResizedImage) {
		const pathSplitted = file.path.split('/');
		const resizedFolderName = 'resized';
		pathSplitted.splice(1, 0, resizedFolderName);
		resizedImage = pathSplitted.join('/');
	}
	return {
		name: file.filename,
		size: file.size,
		url: file.path,
		type: file.mimetype,
		height: file?.height,
		width: file?.width,
		resized: resizedImage,
	};
};

/**
 *
 * @param {string} entity
 * @param {'created'|'updated'|'deleted'|'notFound'} type
 * @returns {string?}
 */
exports.prepareResponseMessage = (entity, type) => {
	if (
		!entity ||
		!type ||
		!['created', 'updated', 'deleted', 'notFound'].includes(type)
	) {
		return undefined;
	}
	return replace(responseMessages.generic[type], '{{entity}}', entity);
};

exports.appInDevelopment = () => process.env.NODE_ENV === 'development';

/**
 *
 * @param {string!} url
 * @param {(...args: any[]) => any} callback
 * @returns
 */
exports.deleteFile = (url, callback = () => {}) => {
	if (!url) return;
	fs.unlink(`${__basedir}/${url}`, callback);
};

/**
 *
 * @param {boolean} flag
 * @returns {boolean}
 */
exports.checkIfQueryParamIsTrue = (flag) =>
	[true, 1, '1', 'true'].includes(flag) && flag;
