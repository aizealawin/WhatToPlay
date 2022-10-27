const mongoose = require('mongoose')
const UserSchema = require('./user')
const VideoGameSchema = require('./VideoGame')

const User = mongoose.model('User', UserSchema)
const VideoGame = mongoose.model('VideoGame', VideoGameSchema)

module.exports = {
  User,
  VideoGame
}
