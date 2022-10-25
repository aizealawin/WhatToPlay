const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('This is root!'))

router.post('/createVideoGame', controllers.createVideoGame)
router.delete('/deleteGame/:id', controllers.deleteVideoGame)
router.put('/updateGame/:id', controllers.updateVideoGame)
router.get('/library', controllers.getAllVideoGames)

router.get('/login', controllers.createUser)

router.get('/updateLibrary', (req, res) =>
  res.send('This is where you update games.')
)

module.exports = router
