const express = require('express')
const router = express.Router()
const Estate = require('../../scripts/estate')

router.post('/estate/add', (req, res) => {
  Estate.add(req, res)
})

router.get('/estate/get', (req, res) => {
  Estate.get(req, res)
})

module.exports = {
  router
}
