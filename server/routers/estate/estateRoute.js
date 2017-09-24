const express = require('express')
const router = express.Router()
const Estate = require('../../scripts/estate')

router.post('/estate/add', (req, res) => {
  Estate.add(req, res)
})

router.get('/estate/get', (req, res) => {
  Estate.fetch(req, res)
})

router.get('/estate/get/:id', (req, res) => {
  Estate.getEstateByID(req, res)
})

module.exports = {
  router
}
