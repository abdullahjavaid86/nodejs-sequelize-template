/** @format */

const router = require('express').Router();
const middleware = require('@src/middlewares');
const errors = require('@src/errors/error');
const healthRouter = require('@src/health/router');
const users = require('@controller/user/routes');
const verifyToken = require('@src/middlewares/auth');
const isAdmin = require('@src/middlewares/isAdmin');

// Wire up middleware
router.use(middleware.doSomethingInteresting);

router.use('/', healthRouter);
router.use('/api/v1/users', verifyToken, isAdmin, users);

// Wire up error-handling middleware
router.use(errors.errorHandler);
router.use(errors.nullRoute);

// Export the router
module.exports = router;
