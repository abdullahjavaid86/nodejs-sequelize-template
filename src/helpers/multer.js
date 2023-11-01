/** @format */

//! 2_000_000 = 2000000 = 2mb

const multer = require('multer');
const { uniqueId } = require('lodash');

const storage = multer.diskStorage({
	destination(req, file, cb) {
		cb(null, './uploads');
	},
	filename(req, file, cb) {
		cb(null, `${Date.now()}_random_${uniqueId()}_${file.originalname}`);
	},
});

const fileFilter = (req, file, cb) => {
	// reject a file
	if (!file.originalname.match(/\.(png|jpg|jpeg|gif|PNG|JPG|GIF|JPEG)$/)) {
		// upload only png and jpg format
		cb(null, false);
		return cb(new Error('Only png, jpg, jpeg and gif are allowed'));
	}
	return cb(null, true);
};

const pdfFileFilter = (req, file, cb) => {
	// reject a file
	if (!file.originalname.match(/\.(png|jpg|jpeg|pdf|PDF|PNG|JPG|JPEG)$/)) {
		// upload only png and jpg format
		cb(null, false);
		return cb(new Error('Only png, jpg, jpeg and pdf are allowed'));
	}
	return cb(null, true);
};

exports.upload = multer({
	storage,
	limits: {
		fileSize: 20_000_000,
	},
	fileFilter,
});

exports.uploadWithPDF = multer({
	storage,
	limits: {
		fileSize: 50_000_000,
	},
	fileFilter: pdfFileFilter,
});

exports.memoryStorage = multer.memoryStorage;
