/** @format */

const router = require('express').Router();
const role = require('@controller/role');

router.get('/', role.get);

// Export the router
module.exports = router;
