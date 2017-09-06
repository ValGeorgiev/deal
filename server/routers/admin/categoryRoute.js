const express = require('express')
const router = express.Router()
const Category = require('../../scripts/category')

router.post('/add/category', (req, res) => {
  Category.add(req, res)
})

module.exports = {
  router
}
