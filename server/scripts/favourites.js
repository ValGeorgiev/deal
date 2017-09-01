const UserModel = require('../models/user')
const EstateModel = require('../models/estate')

class Favourites {
  constructor() {

  }

  add(req, res) {

    const {
      id,
      uid
    } = req.body

    EstateModel.findOne({
      _id: id
    }).catch((error) => {
      res.status(400).send({
        success: false,
        error
      })
    }).then((estate) => {
      UserModel.findOne({
        _id: uid
      }).catch((error) => {
        res.status(400).send({
          success: false,
          error
        })
      }).then((user) => {
        user.favourites.push(estate)

        user.save().catch((error) => {
          res.status(400).send({
            success: false,
            error
          })
        }).then((user) => {
          res.send({
            success: true,
            user
          })
        })
      })
    })
  }

  remove(req, res) {
    const {
      id,
      uid
    } = req.body

    EstateModel.findOne({
      _id: id
    }).catch((error) => {
      res.status(400).send({
        success: false,
        error
      })
    }).then((estate) => {
      UserModel.findOne({
        _id: uid
      }).catch((error) => {
        res.status(400).send({
          success: false,
          error
        })
      }).then((user) => {
        let favourites = user.favourites

        user.favourites = favourites.filter((estateID) => {
          return estateID.toString() !== estate.id
        })

        user.save().catch((error) => {
          res.status(400).send({
            success: false,
            error
          })
        }).then((user) => {
          res.send({
            success: true,
            user
          })
        })
      })
    })
  }

  get(req, res) {
    const {
      uid
    } = req.query

    UserModel.findOne({
      _id: uid
    }).populate('favourites').exec((error, user) => {

      if (!!error || !user) {
        res.status(400).send({
          error
        })
      } else {
        res.status(200).send({
          favourites: user.favourites
        })
      }
    })
  }
}


module.exports = new Favourites()
