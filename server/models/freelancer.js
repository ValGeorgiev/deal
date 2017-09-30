const mongoose = require('mongoose')
const Schema = mongoose.Schema

let FreelancerSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  phone: {
    type: String
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
  projects: [{
    type: Schema.Types.ObjectId,
    ref: 'Project'
  }]
})

module.exports = mongoose.model('Freelancer', FreelancerSchema)
