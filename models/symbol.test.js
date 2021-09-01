const { Symbol } = require('./symbol')
const mongoose = Symbol.base

afterAll(() => {
  // console.log(mongoose)
  // console.log(mongoose.connections)
  mongoose.connection.close()
})

describe('mongoose', () => {
  it('should be able to connect to MongoDB', (done) => {
    mongoose.connection.on('connected', function() {
      // console.log(this)
      expect(mongoose.STATES[mongoose.connection.readyState]).toBe('connected')
      done()
    })
  })
})

describe('Symbol', () => {
  describe('.findOne()', () => {
    it('should find document without error', (done) => {
      Symbol.findOne({}, function(err, symbol) {
        // console.log(this)
        // console.log(symbol)
        // console.log(symbol._id)
        // console.log(typeof symbol._id)
        expect(symbol._id).toBeInstanceOf(mongoose.Types.ObjectId)
        expect(err).toBeNull()
        done()
      })
    })
  })
})
