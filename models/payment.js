const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false },
);

module.exports = mongoose.model('payment', paymentSchema);
