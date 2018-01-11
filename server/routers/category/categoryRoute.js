const express = require('express')
const router = express.Router()
const Category = require('../../scripts/category')
const Refinement = require('../../scripts/refinement')

router.get('/categories/online', (req, res) => {
  Category.getAllOnline(req, res)
})

router.get('/refinements/:type', (req, res) => {
  Refinement.getRefinementsByType(req, res)
})

module.exports = {
  router
}
