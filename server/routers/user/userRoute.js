const express = require('express')
const router = express.Router()

router.post('/auth/signup', (req, res) => {
  console.log('test')
  console.log(req.body)
  res.status(200).send({
    foo: 'foooo',
    bar: 'barrr'
  })
})

module.exports = {
  router
}
