const express = require('express')
const router = express.Router()
const Favourites = require('../../scripts/favourites')

router.post('/favourites/add', (req, res) => {
  Favourites.add(req, res)
})

router.post('/favourites/remove', (req, res) => {
  Favourites.remove(req, res)
})

router.get('/favourites/get', (req, res) => {
  Favourites.get(req, res)
})

module.exports = {
  router
}
