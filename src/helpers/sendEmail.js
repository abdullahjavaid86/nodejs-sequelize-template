/** @format */

const nodemailer = require('nodemailer');
const logger = require('@utils/logger');

/**
 *
 * @param {import('nodemailer/lib/mailer').Options['to']} email
 * @param {import('nodemailer/lib/mailer').Options['subject']} subject
 * @param {import('nodemailer/lib/mailer').Options['text']} text
 * @param {import('nodemailer/lib/mailer').Options['attachments']} attachments
 * @param {boolean} isHtml
 */
const sendEmail = async (email, subject, text, isHtml, attachments) => {
	const transporter = nodemailer.createTransport({
		host: process.env.MAIL_HOST,
		service: process.env.MAIL_SERVICE,
		port: process.env.MAIL_PORT,
		secure: process.env.MAIL_SECURE === 'true',
		auth: {
			user: process.env.MAIL_USERNAME,
			pass: process.env.MAIL_PASSWORD,
		},
	});

	try {
		await transporter.sendMail({
			from: process.env.MAIL_FROM_ADDRESS,
			to: email,
			subject,
			text: isHtml ? undefined : text,
			html: isHtml ? text : undefined,
			attachments,
		});

		logger.info('email sent successfully');
	} catch (error) {
		logger.error(error, 'email not sent');
	}
};

module.exports = sendEmail;
