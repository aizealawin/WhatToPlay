const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('This is root!'))
app.get('/login', (req, res) => res.send('This is login!'))
app.get('/library', (req, res) => res.send('This is your library'))
app.get('/addNewGame', (req, res) =>
  res.send('This is where you add a new game')
)
app.get('/deleteGame', (req, res) =>
  res.send('This is where you delete a game!')
)
app.get('/updateLibrary', (req, res) =>
  res.send('This is where you update games.')
)

module.exports = app
