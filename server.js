require('dotenv').config()

const app = require('./app')
 
const port = process.env.PORT || 4003
const server = app.listen(port, function() {
  console.log('App listening on port %s, in environment %s!', port, (process.env.NODE_ENV || ''))
})
