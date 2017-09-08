const express = require('express')
const router = express.Router()
const Category = require('../../scripts/category')

router.post('/add/category', (req, res) => {
  Category.add(req, res)
})

router.get('/categories', (req, res) => {
  Category.getAll(req, res)
})

router.get('/category/:id', (req, res) => {
  Category.getCategoryByID(req, res)
})

router.delete('/category/:id', (req, res) => {
  Category.deleteCategoryByID(req, res)
})

router.put('/category/:id', (req, res) => {
  Category.updateCategory(req, res)
})

module.exports = {
  router
}
