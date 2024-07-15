const mongoose = require('mongoose');

const carSchema = mongoose.Schema(
  {
    model: { type: String, required: true, minlength: 3 },
    price: { type: Number, required: true },
    phone: { type: String, required: true, length: 11 },
    images: [{ type: String }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  }, {
  timestamps: true,
}
);

const Car = mongoose.model('Car', carSchema);

module.exports = Car;