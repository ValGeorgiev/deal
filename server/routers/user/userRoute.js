const express = require('express')
const router = express.Router()
const Auth = require('../../scripts/auth')
const User = require('../../scripts/user')

router.post('/auth/signup', (req, res) => {
  Auth.signup(req, res)
})

router.post('/auth/login', (req, res) => {
  Auth.login(req, res)
})

router.get('/user/get/:id', (req, res) => {
  User.getByID(req, res)
})

module.exports = {
  router
}
