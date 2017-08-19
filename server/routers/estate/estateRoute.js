const express = require('express')
const router = express.Router()
const Estate = require('../../scripts/estate')

router.post('/estate/add', (req, res) => {
  Estate.add(req, res)
})

module.exports = {
  router
}
