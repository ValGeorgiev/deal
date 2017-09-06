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
      innerCategories,
      refinements
    } = req.body

    const category = new CategoryModel({
      name: categoryName,
      value: _.kebabCase(categoryName)
    })

    category.save((err, _category) => {
      if (!!err) {
        return res.status(500).send({
          message: err.message
        })
      }

      this._constructInnerCategories(innerCategories, _category._id)
      this._constructRefinements(refinements, _category._id)

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
          name: innerCategories[i].name,
          value: _.kebabCase(innerCategories[i].name),
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
          name: refinements[i].name,
          value: _.kebabCase(refinements[i].name),
          online: refinements[i].online,
          categoryID: categoryID
        })

        newRef.save()
      }
    }
  }
}

module.exports = new Category()
