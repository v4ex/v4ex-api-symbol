const request = require('supertest')
const express = require('express')
const { mongoose } = require('v4ex-api-core')

const apiRoutes = require('./api')

const app = express()
apiRoutes(app)

afterAll(() => {
  mongoose.connection.close()
})

describe('routes', () => {

  describe('/api/symbol/:symbol', () => {

    it('/api/symbol/aapl', (done) => {
      request(app)
        .get('/api/symbol/aapl')
        .expect(200)
        .end(function(err, res) {
          // console.log(this)
          // console.log(res.body)
          if (err) throw err
          expect(res.body.code).toBe('aapl')
          done()
        })
    })

  })

  describe('/api/exchange/:exchange/code/:code', () => {

    it('/api/exchange/nasdaq/code/aapl', (done) => {
      request(app)
        .get('/api/exchange/nasdaq/code/aapl')
        .expect(200)
        .end(function(err, res) {
          if (err) throw err
          expect(res.body.exchange).toBe('nasdaq')
          expect(res.body.code).toBe('aapl')
          done()
        })
    })

  })
  
})
