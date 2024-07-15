const Car = require('../models/carModel');
const asyncHandler = require('../middleware/asyncHandler');

// @desc    Register a new car
// @route   POST /api/cars
const postCar = asyncHandler(async (req, res) => {
    const { model, price, phone } = req.body;

    const car = await Car.create({
        model,
        price,
        phone,
        images: req.files.map(file => file.path),
        user: req.user.id,
    });

    res.status(201).json({ success: true, data: car });
});

module.exports = { postCar };