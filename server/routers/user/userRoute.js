const express = require('express')
const router = express.Router()
const Auth = require('../../scripts/auth')

router.post('/auth/signup', (req, res) => {
  Auth.signup(req, res)
})

module.exports = {
  router
}
