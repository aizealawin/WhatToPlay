const mongoose = require('mongoose')
const Schema = mongoose.Schema

const comment = new Schema(
  {
    username: { type: String, required: true },
    content: { type: String, required: true },
    rating: { type: String, required: true },
    gameId: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = mongoose.model('comment', comment)
