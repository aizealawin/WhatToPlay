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

module.exports = router
