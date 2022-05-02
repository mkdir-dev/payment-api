const { celebrate, Joi } = require('celebrate');

module.exports.paymentValidation = celebrate({
  body: Joi.object().keys({
    CardNumber: Joi.string().required().min(16).max(16),
    ExpDate: Joi.string().required().max(7),
    Cvv: Joi.string().required().min(3).max(3),
    Amount: Joi.string().required().min(1),
  }),
});
