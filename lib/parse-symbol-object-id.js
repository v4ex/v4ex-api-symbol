const { Symbol } = require('../models/symbol')
const mongoose = Symbol.base

module.exports = async (id) => {
  try {
    return new mongoose.Types.ObjectId(id)
  } catch (e) {
    // console.log(e.name)
    if (e.name === 'TypeError') {
      return (await Symbol.findOne({
        code: id.toLowerCase()
      }).exec())._id
    }
  }
}
