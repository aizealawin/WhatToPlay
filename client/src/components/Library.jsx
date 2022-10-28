// will display all of the games in a user's library
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import GameCard from './GameCard'


const Library = () => {

const BASE_URL = '/api'

const [games, setGames] = useState([])

useEffect(() => {
  const getGames = async () => {
    const response = await axios.get(
      `${BASE_URL}/library`)
    setGames(response?.data.videogames)
  }
  getGames()
}, [])


return(
  <div className='container-grid'>
    {games.map((result) => (
      <Link to={`/library/${result._id}`} key={result._id}>
        <GameCard
          poster={result.poster}
          name={result.name}
          description={result.description}
          />
      </Link>
    ))}
  </div>
)

}

export default Library