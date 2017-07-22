const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const {
  PORT,
  DATABASE
} = require('./config')

mongoose.connect(DATABASE, {
    useMongoClient: true
  }, (err) => {
  if (!!err) {
    console.error(err)
  } else {
    console.log('DataBase is successfully started!')
  }
})


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))

// parse application/json
app.use(bodyParser.json())

app.listen(PORT, () => {
  console.log("Server is started and listen on port 8001")
})
