const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  lastSignIn: Date
})

module.exports = mongoose.model('user', UserSchema)