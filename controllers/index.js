// make my CRUD here
const VideoGame = require('../models/VideoGame')

const createVideoGame = async (req, res) => {
  try {
    const videogame = await new VideoGame(req.body)
    await videogame.save()
    return res.status(201).json({
      videogame
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteVideoGame = async (req, res) => {
  try {
    const videogame = await VideoGame.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Videogame Deleted')
    }
    throw new Error('Videogame not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createVideoGame,
  deleteVideoGame
}
