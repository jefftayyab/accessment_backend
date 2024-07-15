const Joi = require('joi')

const authUserSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
})

module.exports = { authUserSchema };
