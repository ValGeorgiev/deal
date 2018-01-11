let RefinementModel = require('../models/refinement')
let InnerCategoryModel = require('../models/innerCategory')
const _ = require('lodash')

class Refinement {
  constructor() {

  }

  getAll(req, res) {
    RefinementModel.find({}).catch((error) => {
      res.status(500).send(error)
    }).then((refinements) => {
      res.status(200).send({
        refinements
      })
    })
  }

  getRefinementByID(req, res) {
    const {
      id
    } = req.params

    RefinementModel.findOne({
      _id: id
    }).catch((error) => {
      res.status(500).send(error)
    }).then((refinement) => {
      res.status(200).send({
        refinement
      })
    })
  }

  getRefinementsByType(req, res) {
    const {
      type
    } = req.params

    let filters = {}

    RefinementModel.find({
      category: type
    }).catch((error) => {
      res.status(500).send(error)
    }).then((refinements) => {

      filters.refinements = refinements

      InnerCategoryModel.find({
        category: type
      }).catch((error) => {
        res.status(500).send(error)
      }).then((categories) => {
        filters.categories = categories
        res.status(200).send({
          filters
        })
      })
    })
  }

  deleteRefinementByID(req, res) {
    const {
      id
    } = req.params

    RefinementModel.remove({
      _id: id
    }).catch((error) => {
      res.status(500).send(error)
    }).then(() => {
      this.getAll(req, res)
    })
  }

  updateRefinement(req, res) {
    const {
      id
    } = req.params

    const {
      _id,
      name,
      value,
      online
    } = req.body

    RefinementModel.findOne({
      _id: _id
    }).catch((error) => {
      res.status(500).send(error)
    }).then((refinement) => {
      refinement.name = name
      refinement.value = value
      refinement.online = online

      refinement.save((error, ref) => {
        if (error) {
          return res.status(500).send(error)
        }
        return res.status(200).send({
          refinement: ref
        })
      })
    })
  }
}

module.exports = new Refinement()
