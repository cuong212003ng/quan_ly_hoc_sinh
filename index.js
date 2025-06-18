//config express
const express = require('express')
const app = express()

//config route
const studentRoute = require('./routes/student/index.route')

const port = 1025

// Config view engine
app.set('view engine', 'pug')
app.set('views', './views')

//config route
studentRoute(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
