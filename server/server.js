const express = require('express')
const app = express()

const { PORT } = require('./config')

app.listen(PORT, () => {
  console.log("Server is started and listen on port 8001")
})
