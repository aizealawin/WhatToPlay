const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VideoGame = new Schema(
  {
    poster: { type: Image, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('VideoGame', VideoGame)
