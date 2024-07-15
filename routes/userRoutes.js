const express = require('express');
const { authUserSchema } = require('../validators/userValidators.js');
const requestValidator = require('../middleware/requestValidator.js');
const { authUser } = require('../controllers/userController.js');

const router = express.Router();

const validate = requestValidator(authUserSchema);
router.route('/auth').post(validate, authUser);

module.exports = router;
