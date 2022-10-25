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

module.exports = {
  createVideoGame
}
