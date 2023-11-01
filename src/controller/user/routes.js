/** @format */

const router = require('express').Router();
const user = require('@controller/user');
const { upload } = require('@root/src/helpers/multer');

router.get('/', user.get);
router.get('/:id', user.show);
router.post('/', upload.single('image'), user.create);
router.put('/:id', upload.single('image'), user.update);
router.delete('/:id', user.delete);
router.get('/activate/:id', user.activate);
router.get('/de-activate/:id', user.deActivate);

// Export the router
module.exports = router;
