const mongoose = require('mongoose')
const Schema = mongoose.Schema

let CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  value: {
    type: String,
    required: true
  },
  online: {
    type: Boolean,
    default: true
  }
})

module.exports = mongoose.model('Category', CategorySchema)
