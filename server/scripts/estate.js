let EstateModel = require('../models/estate')

class Estate {
  constructor() {
    this.ESTATE_TYPES = ['apartament', 'house', 'bussiness', 'hotel', 'faculty', 'sports', 'field']
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
      estateType,
      additionalType
    } = req.body

    console.log(additionalType)
    const estate = new EstateModel({
      quadrature,
      buildingYear,
      moreInfo,
      floor,
      allFloors,
      price,
      buildingType,
      currency,
      additionalType,
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

  fetch(req, res) {
    const { query } = req

    let types = query.type ? query.type.split(',') : this.ESTATE_TYPES
    let count = query.count ? parseInt(query.count) : 10
    let start = query.start ? parseInt(query.start) : 0
    let maxq = query.maxq ? parseInt(query.maxq) + 1 : 15000
    let minq = query.minq ? parseInt(query.minq) - 1 : 0

    EstateModel.find({
      estateType: {
        $in: types
      },
      quadrature: {
        $gt: minq,
        $lt: maxq
      }
    }).skip(start).limit(count).exec((err, estates) => {
      if (!!err) {
        console.log(err)
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

  getEstateByID(req, res) {
    const { params } = req

    EstateModel.findOne({
      _id: params.id
    }, (err, estate) => {
      if (!!err) {
        res.status(500).send({
          message: err.message
        })
      } else {
        res.status(200).send({
          estate
        })
      }
    })
  }

}


module.exports = new Estate()
