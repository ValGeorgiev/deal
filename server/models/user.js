const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

let UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
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
    enum: ['user', 'admin'],
    default: 'user'
  },
  isAgency: {
    type: Boolean,
    default: false
  },
  agency: {
    type: Schema.Types.ObjectId,
    ref: 'Agency'
  },
  favourites: [{
    type: Schema.Types.ObjectId,
    ref: 'Estate'
  }]
})

UserSchema.path('email').validate((name) => {
  return name.length >= 5 && name.length <= 60
})

UserSchema.path('password').validate((password) => {
  return password.length > 5 && password.length <= 100
})

UserSchema.pre('save', function(next) {
  const user = this

  if (!user.isModified('password')) {
    return next()
  }

  bcrypt.hash(user.password, null, null, (err, hash) => {
    if (err) {
      return next(err)
    }

    user.password = hash
    next()
  })
})

UserSchema.methods.comparePassword = function(password) {
  const user = this

  return bcrypt.compareSync(password, user.password)
}

module.exports = mongoose.model('User', UserSchema)
