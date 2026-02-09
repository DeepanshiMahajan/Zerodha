const { Schema } = require("mongoose");

const FundsSchema = new Schema({
  availableMargin: Number,
  usedMargin: Number,
  availableCash: Number,
  openingBalance: Number,
  payin: Number,
}, { timestamps: true }); // <-- adds createdAt and updatedAt

module.exports = { FundsSchema };

