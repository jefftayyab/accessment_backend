const express = require('express');
const {
    postCar
} = require('../controllers/carController.js');
const { protect } = require('../middleware/authMiddleware.js');
const upload = require('../middleware/multer.js'); 
const requestValidator = require('../middleware/requestValidator.js');
const { postCarSchema } = require('../validators/carValidators.js');

const router = express.Router();

const validate = requestValidator(postCarSchema);
router.route('/').post(protect, upload.array('images', 10), validate, postCar);

module.exports = router;
