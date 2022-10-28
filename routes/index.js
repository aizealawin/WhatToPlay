const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('This is root!'))

router.post('/createVideoGame', controllers.createVideoGame)
router.delete('/deleteGame/:id', controllers.deleteVideoGame)
router.put('/updateGame/:id', controllers.updateVideoGame)
router.get('/library', controllers.getAllVideoGames)
router.get('/library/:id', controllers.getByIdVideoGame)

router.post('/login', controllers.createUser)
router.get('/users')

router.post('/addComment', controllers.createComment)
router.get('/comments', controllers.getAllComments)
router.get('/comments/:id', controllers.getCommentById)
router.delete('/deleteComment/:id', controllers.deleteComment)
router.get('/commentList/:id', controllers.findCommentsByGameId)

module.exports = router
