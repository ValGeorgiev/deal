const express = require('express')
const router = express.Router()
const Refinement = require('../../scripts/refinement')

router.get('/refinements', (req, res) => {
  Refinement.getAll(req, res)
})

router.get('/refinement/:id', (req, res) => {
  Refinement.getRefinementByID(req, res)
})

router.delete('/refinement/:id', (req, res) => {
  Refinement.deleteRefinementByID(req, res)
})

router.put('/refinement/:id', (req, res) => {
  Refinement.updateRefinement(req, res)
})

module.exports = {
  router
}
