const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
var bcrypt = require('bcryptjs');
const saltRounds = 10;
//Define a schema
const Schema = mongoose.Schema;
const TransactionSchema = new Schema({
sender_id: {
    type: String,
    trim: true,
    required: true
  },
  transaction_id: { 
    type: Number,
    trim: true,
   },
   transaction_amount: {
    type: Number,
    trim: true,
    required: false
  },
  transaction_time: {
    type : Date, 
    default: Date.now
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
});
// hash user password before saving into database
TransactionSchema.pre("save", function(next) {
  next();
});
module.exports = mongoose.model("transaction", TransactionSchema);
