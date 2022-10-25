const { Schema } = require('mongoose')

const User = new Schema(
  {
    username: { type: String, require: true },
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    library: { type: Array, require: false }
  },
  { timestamps: true }
)

module.exports = User
