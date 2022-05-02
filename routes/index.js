const router = require('express').Router();

const paymentsRoutes = require('./payments');

const NotFoundError = require('../errors/404 - NotFoundError');
const { serverErr } = require('../errors/errorMessages');

router.use('/payments', paymentsRoutes);

router.get('*', () => {
  throw new NotFoundError(serverErr.ServerError);
});

module.exports = router;