// make my CRUD here
const User = require('../models/user')
const VideoGame = require('../models/VideoGame')
const Comment = require('../models/comments')

// ALL OF MY VIDEOGAME CONTROLLERS BELOW

const getAllVideoGames = async (req, res) => {
  try {
    const videogames = await VideoGame.find()
    return res.status(200).json({ videogames })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const getByIdVideoGame = async (req, res) => {
  try {
    const { id } = req.params
    const videogame = await VideoGame.findById(id)
    if (videogame) {
      return res.status(200).json({ videogame })
    }
    return res.status(404).send('Videogame with the specific ID does not exist')
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

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
    const { id } = req.params
    const deleted = await VideoGame.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Videogame Deleted')
    }
    throw new Error('Videogame not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateVideoGame = async (req, res) => {
  try {
    const videogame = await VideoGame.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.status(200).json(videogame)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// ALL OF MY USER CONTROLLERS BELOW
const createUser = async (req, res) => {
  try {
    const user = await new User(req.body)
    await user.save()
    return res.status(201).json({
      user
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getUserById = async (req, res) => {
  try {
    const user = await User.findById()
    res.status(200).json({ users })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

// COMMENT CONTROLLERS BELOW

const createComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body)
    await comment.save()
    return res.status(201).json({
      comment
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getCommentById = async (req, res) => {
  try {
    const { id } = req.params
    const comment = await Comment.findById(id)
    if (comment) {
      return res.status(200).json({ comment })
    }
    return res.status(404).send('Comment with the specific ID does not exist')
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find()
    return res.status(200).json({ comments })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Comment.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Comment Deleted')
    }
    throw new Error('Comment not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const findCommentsByGameId = async (req, res) => {
  try {
    const { id } = req.params
    const comments = await Comment.find({ gameId: id })
    if (comments) {
      return res.status(200).json({ comment })
    }
    return res
      .status(404)
      .send('Comments with the specific gameID do not exist')
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getByIdVideoGame,
  getAllVideoGames,
  createVideoGame,
  deleteVideoGame,
  updateVideoGame,
  createUser,
  getUserById,
  createComment,
  getCommentById,
  getAllComments,
  deleteComment,
  findCommentsByGameId
}
