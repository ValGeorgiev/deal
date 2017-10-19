const mongoose = require('mongoose')
const Schema = mongoose.Schema

let RefinementSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  value: {
    type: String,
    require: true
  },
  type: {
    type: String,
    required: true
  },
  online: {
    type: Boolean,
    default: true
  },
  category: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Refinement', RefinementSchema)
