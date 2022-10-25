const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('This is root!'))

router.post('/createVideoGame', controllers.createVideoGame)
router.get('/deleteGame', controllers.deleteVideoGame)

router.get('/login', controllers.createUser)

router.get('/library', (req, res) => res.send('This is your library'))

router.get('/updateLibrary', (req, res) =>
  res.send('This is where you update games.')
)

module.exports = router
