const router = require('express').Router();

const { createPayment } = require('../controllers/payment');
const { paymentValidation } = require('../middlewares/validation');

router.post('/', paymentValidation, createPayment);

module.exports = router;