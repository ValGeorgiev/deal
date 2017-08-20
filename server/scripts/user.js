let UserModel = require('../models/user')

class User {
  constructor() {

  }

  getByID(req, res) {
    const { params } = req

    UserModel.findOne({
      _id: params.id
    }, (err, user) => {
      if (!!err) {
        res.status(500).send({
          message: err.message
        })
      } else {
        res.status(200).send({
          user
        })
      }
    })
  }

}


module.exports = new User()
