const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')

const userApiRoutes = require('./routers/user/userRoute')
const estateApiRoutes = require('./routers/estate/estateRoute')
const favouritesApiRoutes = require('./routers/favourites/favouritesRoute')
const adminCategoryApiRoutes = require('./routers/admin/categoryRoute')
const refinementApiRoutes = require('./routers/admin/refinementRoute')
const categoryApiRoutes = require('./routers/category/categoryRoute')

const {
  PORT,
  DATABASE,
  COOKIE_SECRET
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
mongoose.Promise = global.Promise

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
app.use('/api', estateApiRoutes.router)
app.use('/api', favouritesApiRoutes.router)
app.use('/api', categoryApiRoutes.router)

app.use('/api/admin', adminCategoryApiRoutes.router)
app.use('/api/admin', refinementApiRoutes.router)

app.listen(PORT, () => {
  console.log("Server is started and listen on port 8001")
})
