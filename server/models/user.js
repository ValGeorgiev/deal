const mongoose = require('mongoose')
const Schema = mongoose.Schema

let UserSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
    required: true,
    trim: true,
    match: /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/,
    index: {
      unique: true
    }
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'agency', 'admin'],
    default: 'user'
  }
})

module.exports = mongoose.Model('User', UserSchema)
