const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt")

const userSchema = new Schema({
  username: String,
  hash: String,
  salt: String,
});

const saltRounds = 10

userSchema.methods.verifyPassword = async function (password) {
return await bcrypt.compare(password, this.hash)
};

userSchema.method.setPassword = async function (password) {
  this.salt = bcrypt.genSaltSync(saltRounds)
  this.hash = await bcrypt.hash(password, this.salt)
}

const User = mongoose.model("User", userSchema)

module.exports = User;
