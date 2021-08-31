const { Symbol } = require('../components/symbol')

module.exports = app => {
  app.route('/api/symbol/:symbol')
    .get((req, res) => {
      Symbol.find({
        code: req.params.symbol
      }, (err, symbols) => {
        res.json(symbols)
      })
    })

  app.route('/api/exchange/:exchange/code/:code')
    .get((req, res) => {
      Symbol.findOne({
        exchange: req.params.exchange,
        code: req.params.code,
      }, (err, symbol) => {
        res.json(symbol)
      })
    })
}
