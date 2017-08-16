const mongoose = require('mongoose')
const Schema = mongoose.Schema

let EstateSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  quadrature: {
    type: Number,
    min: 1,
    default: 1,
    require: true
  }
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
    require: true
  },
  currency: {
    type: String,
    enum: ['$', 'лв', '€', '£'],
    require: true,
    default: '€'
  },
  buildingType: {
    type: String,
    enum: ['brick', 'panel', 'beamwork']
  }
  buildingYear: {
    type: Number,
    min: 1800
  },
  moreInfo: {
    type: String,
    trim: true
  }
})

module.exports = mongoose.Model('Estate', EstateSchema)
