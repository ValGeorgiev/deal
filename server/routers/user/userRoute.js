const express = require('express')
const router = express.Router()
let User = require('../../models/user')


router.post('/auth/signup', (req, res) => {
  console.log('test')
  console.log(req.body)

  const {
    email,
    name,
    familyName,
    password
  } = req.body

  User.findOne({
    email
  }, (err, user) => {
    if (!user) {
      console.log(email)
      console.log(name)
      console.log(familyName)
      console.log(password)
      const newUser = new User({
        email: email,
        firstName: name,
        lastName: familyName,
        password: password
      })

      newUser.save((err, _user) => {
        if (!!err) {
          return res.status(500).send(err)
        }
        return res.status(201).send({
          success: true
        })
      })
    } else {
      return res.status(401).send({
        success: false
      })
    }
  })

  // res.status(200).send({
  //   foo: 'foooo',
  //   bar: 'barrr'
  // })
})

module.exports = {
  router
}
