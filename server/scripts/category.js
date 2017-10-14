let CategoryModel = require('../models/category')
let InnerCategoryModel = require('../models/innerCategory')
let RefinementModel = require('../models/refinement')
const _ = require('lodash')

class Category {
  constructor() {

  }

  add(req, res) {

    const {
      categoryName,
      categoryLabel,
      innerValues,
      refinementsValues
    } = req.body

    const category = new CategoryModel({
      name: categoryName,
      value: _.kebabCase(categoryLabel)
    })

    category.save((err, _category) => {
      if (!!err) {
        return res.status(500).send({
          message: err.message
        })
      }

      this._constructInnerCategories(innerValues, _category._id)
      this._constructRefinements(refinementsValues, _category._id)

      return res.status(201).send({
        category: _category
      })
    })
  }

  _constructInnerCategories(innerCategories, categoryID) {
    let length = innerCategories.length
    for (let i = 0; i < length; i++) {

      if (innerCategories[i].name !== '') {
        const newCat = new InnerCategoryModel({
          name: innerCategories[i].value,
          value: _.kebabCase(innerCategories[i].label),
          online: innerCategories[i].online,
          categoryID: categoryID
        })

        newCat.save()
      }
    }
  }

  _constructRefinements(refinements, categoryID) {
    let length = refinements.length

    for (let i = 0; i < length; i++) {
      if (refinements[i].name !== '') {
        const newRef = new RefinementModel({
          name: refinements[i].value,
          value: _.kebabCase(refinements[i].label),
          type: refinements[i].type,
          online: refinements[i].online,
          categoryID: categoryID
        })

        newRef.save()
      }
    }
  }

  getAll(req, res) {
    CategoryModel.find({}).catch((error) => {
      res.status(500).send(error)
    }).then((categories) => {
      res.status(200).send({
        categories
      })
    })
  }

  getAllOnline(req, res) {
    CategoryModel.find({
      online: true
    }).catch((error) => {
      res.status(500).send(error)
    }).then((categories) => {
      res.status(200).send({
        categories
      })
    })
  }

  getCategoryByID(req, res) {
    const {
      id
    } = req.params

    CategoryModel.findOne({
      _id: id
    }).catch((error) => {
      res.status(500).send(error)
    }).then((category) => {
      res.status(200).send({
        category
      })
    })
  }

  deleteCategoryByID(req, res) {
    const {
      id
    } = req.params

    CategoryModel.remove({
      _id: id
    }).catch((error) => {
      res.status(500).send(error)
    }).then(() => {
      this.getAll(req, res)
    })
  }

  updateCategory(req, res) {
    const {
      id
    } = req.params

    const {
      _id,
      name,
      value,
      online
    } = req.body

    CategoryModel.findOne({
      _id: _id
    }).catch((error) => {
      res.status(500).send(error)
    }).then((category) => {
      category.name = name
      category.value = value
      category.online = online

      category.save((error, cat) => {
        if (error) {
          return res.status(500).send(error)
        }
        return res.status(200).send({
          category: cat
        })
      })
    })
  }
}

module.exports = new Category()
