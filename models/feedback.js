const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TransactionSchema = new Schema({
    likes: {
        type: Number,
        trim: true,
        required: true
    },
    dislikes: { 
        type: Number,
        trim: true,
    },
    ratings: {
        type: Number,
        trim: true,
        required: false
    },
    time: {
        type : Date, 
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "supportdeskUsers"
    },
});
// hash user password before saving into database
TransactionSchema.pre("save", function(next) {
  next();
});
module.exports = mongoose.model("feedback", TransactionSchema);