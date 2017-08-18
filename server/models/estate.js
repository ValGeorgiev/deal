const mongoose = require('mongoose')
const Schema = mongoose.Schema

// @TODO: add required: true to the user property
let EstateSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  estateType: {
    type: String,
    required: true
  },
  additionalType: {
    type: String
  },
  quadrature: {
    type: Number,
    min: 1,
    default: 1,
    required: true
  },
  floor: {
    type: Number,
    min: 0,
    default: 1
  },
  allFloors: {
    type: Number,
    min: 0
  },
  price: {
    type: Number,
    min: 0,
    required: true
  },
  currency: {
    type: String,
    enum: ['$', 'лв', '€', '£'],
    required: true,
    default: '€'
  },
  buildingType: {
    type: String,
    enum: ['brick', 'panel', 'beamwork']
  },
  buildingYear: {
    type: Number,
    min: 1800
  },
  moreInfo: {
    type: String,
    trim: true
  }
})

module.exports = mongoose.model('Estate', EstateSchema)
