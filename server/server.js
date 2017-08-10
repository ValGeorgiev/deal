const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')

const userApiRoutes = require('./routers/user/userRoute')

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

app.use(cors({
  origin: 'http://localhost:8000'
}));

app.use(morgan('dev'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))

// parse application/json
app.use(bodyParser.json())

// routing
app.use('/api', userApiRoutes.router)

app.listen(PORT, () => {
  console.log("Server is started and listen on port 8001")
})
