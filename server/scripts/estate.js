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
}


module.exports = new Estate()
