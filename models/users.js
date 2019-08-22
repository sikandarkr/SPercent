const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
var bcrypt = require('bcryptjs');
const saltRounds = 10;
//Define a schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  userName: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  },
  gender: {
    type: String,
    trim: true
  },
  imageUrl:{
    type:String,
    default:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
  },
  country:{
    type: String,
    trim: true
  },
  state:{
    type: String,
    trim: true
  },
  zipCode:{
    type: String,
    trim: true,
  },
  street:{
    type: String
  },
  college:{
    type:String
  },
  skills: [
    {
      skillType: String,
      years: Number
    }
  ],
  status:{
    type: Boolean,
    default: false
  },
  onlineStatus:{
    type: Boolean
  },
  isAvailable:{
    type: Boolean,
    default: false
  },
});
//hash user password before saving into database
UserSchema.pre("save", function(next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});
module.exports = mongoose.model("supportdeskUsers", UserSchema);
