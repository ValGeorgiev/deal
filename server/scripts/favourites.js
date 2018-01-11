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

    // EstateModel.findOne({
    //   _id: id
    // }).catch((error) => {
    //   res.status(400).send({
    //     success: false,
    //     error
    //   })
    // }).then((estate) => {
    // UserModel.findOne({
    //   _id: uid
    // }).catch((error) => {
    //   res.status(400).send({
    //     success: false,
    //     error
    //   })
    // }).then((user) => {
    //   let favourites = user.favourites

    //   user.favourites = favourites.filter((estateID) => {
    //     return estateID.toString() !== id
    //   })

    //   user.save().catch((error) => {
    //     res.status(400).send({
    //       success: false,
    //       error
    //     })
    //   }).then((user) => {
    //     res.send({
    //       success: true,
    //       favourites: user.favourites
    //     })
    //   })
    // })

    UserModel.findOne({
      _id: uid
    }).populate('favourites').exec((error, user) => {
      if (error) {
        return res.status(400).send({
          success: false,
          error
        })
      }

      let favourites = user.favourites

      user.favourites = favourites.filter((estate) => {
        return estate.id !== id
      })

      user.save().catch((error) => {
        res.status(400).send({
          success: false,
          error
        })
      }).then((user) => {
        res.send({
          success: true,
          favourites: user.favourites,
          user
        })
      })

    })
  }

  get(req, res) {
    const {
      id
    } = req.query

    UserModel.findOne({
      favID: id
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
