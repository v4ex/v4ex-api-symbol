const mongoose = require('../mongoose')

const Schema = mongoose.Schema

const SymbolSchema = new Schema({
  exchange: { type: String, required: true },
  code: { type: String, required: true }
})

const Symbol = mongoose.model('Symbol', SymbolSchema)

module.exports = {
  Symbol
}
