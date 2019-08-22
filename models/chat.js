const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TransactionSchema = new Schema({
    chatId: {
        type: Number,
        trim: true,
    },
    authUserId: { 
        type: Number,
        trim: true,
    },
    friendUserId:{
        type: String,
        trim: true,
    },
    hasChat: {
        type: Boolean,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "supportdeskUsers"
    }
});
//hash user password before saving into database
TransactionSchema.pre("save", function(next) {
  next();
});
module.exports = mongoose.model("chat", TransactionSchema);