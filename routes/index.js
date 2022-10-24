const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('This is root!'))

router.get('/login', (req, res) => res.send('This is login!'))

router.get('/library', (req, res) => res.send('This is your library'))

router.get('/addNewGame', (req, res) =>
  res.send('This is where you add a new game')
)

router.get('/deleteGame', (req, res) =>
  res.send('This is where you delete a game!')
)

router.get('/updateLibrary', (req, res) =>
  res.send('This is where you update games.')
)

module.exports = router
