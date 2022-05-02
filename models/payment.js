const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  CardNumber: {
    type: String,
    required: true,
    minlength: 16,
    maxlength: 16,
  },
  ExpDate: {
    type: String,
    required: true,
    maxlength: 7,
  },
  Cvv: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 3,
  },
  Amount: {
    type: String,
    required: true,
    minlength: 1,
  },
}, { versionKey: false });

module.exports = mongoose.model('payment', paymentSchema);