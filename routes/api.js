const { Symbol } = require('../models/symbol')
const parseSymbolObjectId = require('../lib/parse-symbol-object-id')

module.exports = app => {
  app.route('/api/symbol/:symbol')
    .get(async function(req, res) {
      const _id = await parseSymbolObjectId(req.params.symbol)

      Symbol.findById(_id, function(err, symbol) {
        if (err) {
          console.error(err)
          if (err.name === 'CastError' && err.kind === 'ObjectId') {
            return res.json({
              status: 404,
              error: 'Not Found'
            })
          }
        }
        res.json(symbol)
      })
    })

  app.route('/api/exchange/:exchange/code/:code')
    .get(function(req, res) {
      Symbol.findOne({
        exchange: req.params.exchange,
        code: req.params.code,
      }, function(err, symbol) {
        res.json(symbol)
      })
    })
}
