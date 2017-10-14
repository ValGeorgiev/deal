const express = require('express')
const router = express.Router()
const Category = require('../../scripts/category')

router.get('/categories/online', (req, res) => {
  Category.getAllOnline(req, res)
})

module.exports = {
  router
}
