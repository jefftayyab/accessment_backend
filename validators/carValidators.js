const Joi = require('joi')

const postCarSchema = Joi.object({
  model: Joi.string().required(),
  price: Joi.number().required(),
  phone: Joi.string().pattern(/^(03[0-9]{2})[0-9]{7}$/) // Pattern for Pakistani phone numbers
  .required()
  .messages({
      'string.pattern.base': 'Phone number must be 11 digits long and start with 03.',
      'any.required': 'Phone number is required.',
  })
})

module.exports = { postCarSchema };
