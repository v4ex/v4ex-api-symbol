require('dotenv').config()

const express = require('express')
const app = express()

const apiRoutes = require('./routes/api');
 
app.get('/', function(req, res) {
  res.type('text')
    .send('v4ex-api-symbol')
})

apiRoutes(app)
 
app.listen(process.env.PORT ||  4003)
