const mongoose = require('mongoose')
const Schema = mongoose.Schema

let RefinementSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  online: {
    type: Boolean,
    default: true
  },
  categoryID: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Refinement', RefinementSchema)
