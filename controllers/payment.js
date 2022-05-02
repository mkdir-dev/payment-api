const Payment = require('../models/payment');

const BadRequestError = require('../errors/400 - BadRequestError');
const InternalServerError = require('../errors/500 - InternalServerError');

const { paymentErr, serverErr } = require('../errors/errorMessages');

const {
  SUCCESS_OK,
} = require('../errors/errorStatuses');

module.exports.createPayment = (req, res, next) => {
  const {
    CardNumber,
    ExpDate,
    Cvv,
    Amount,
  } = req.body;

  Payment.create({
    CardNumber,
    ExpDate,
    Cvv,
    Amount,
  })
    .then((payment) => res.status(SUCCESS_OK).send({
      RequestId: payment._id,
      Amount: payment.Amount,
    }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new BadRequestError(paymentErr.ValidationError);
      }
      if (err.name === 'CastError') {
        throw new BadRequestError(paymentErr.BadRequestError);
      }
      throw new InternalServerError(serverErr.InternalServerError);
    })
    .catch(next);
}