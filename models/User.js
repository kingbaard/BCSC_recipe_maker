const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  lastSignIn: {
    type: Date,
    default: Date.now()
  } 
})

module.exports = mongoose.model('user', UserSchema)