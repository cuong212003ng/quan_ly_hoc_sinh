//config express
const express = require('express')
const app = express()

//config environment variables
require('dotenv').config()

//config route
const studentRoute = require('./routes/student/index.route')

const port = process.env.PORT

// Config view engine
app.set('view engine', 'pug')
app.set('views', './views')

//config file static
app.use(express.static('public'))

//config route
studentRoute(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
