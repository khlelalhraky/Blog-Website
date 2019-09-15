const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
);

UserSchema.methods.passwordHash = async function(password) {
  try {
    const slat = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, slat);
    return hash;
  } catch (err) {
    console.error(err);
  }
};

UserSchema.methods.passwordCompare = async function(password, hash) {
  const pass = await bcrypt.compare(password, hash);
  return pass ? true : false;
};

UserSchema.methods.toAuthJSON = function() {
  return {
    email: this.email,
    token: jwt.sign({ email: this.email }, "secretkey")
  };
};

UserSchema.methods.virifyToken = function(token) {
  return jwt.verify(token, "secretkey");
};

module.exports = mongoose.model("Users", UserSchema);
