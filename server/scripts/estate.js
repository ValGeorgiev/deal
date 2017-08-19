let EstateModel = require('../models/estate')

class Estate {
  constructor() {

  }

  add(req, res) {

    const {
      quadrature,
      buildingYear,
      moreInfo,
      floor,
      allFloors,
      price,
      buildingType,
      currency,
      estateType
    } = req.body


    const estate = new EstateModel({
      quadrature,
      buildingYear,
      moreInfo,
      floor,
      allFloors,
      price,
      buildingType,
      currency,
      estateType
    })

    estate.save((err, _estate) => {
      if (!!err) {
        return res.status(500).send({
          message: err.message
        })
      }
      return res.status(201).send({
        estate: _estate
      })
    })
  }

  get(req, res) {
    const { query } = req

    let data = {
      estateType: query.type
    }

    EstateModel.find(data, (err, estates) => {
      if (!!err) {
        res.status(500).send({
          message: err.message
        })
      } else {
        res.status(200).send({
          estates
        })
      }
    })
  }
}


module.exports = new Estate()
