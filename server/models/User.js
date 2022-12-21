const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const json = require("jsonwebtoken");
// const validator = require("validator");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    trim: true,
    maxlength: 24,
    minlength: 3,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    required: [true, "Please provide password"],
    type: String,
    minlength: 4,
  },
  location: {
    trim: true,
    default: "My city",
    type: String,
  },
});
UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
const Users = mongoose.model("User", UserSchema);
module.exports = Users;
