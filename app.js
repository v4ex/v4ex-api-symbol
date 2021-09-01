const express = require('express')
const app = express()

const apiRoutes = require('./routes/api')
 
app.get('/', function(req, res) {
  res.type('text')
    .send('v4ex-api-symbol')
})

apiRoutes(app)

module.exports = app
