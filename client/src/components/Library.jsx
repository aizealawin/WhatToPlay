// will display all of the games in a user's library
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const [games, setGames] = useState([])

useEffect(() => {
  const getGames = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/library`)
    setGames(response?.data.videogames)
  }
  getGames()
}, [])

