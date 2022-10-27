// will display all of the games in a user's library
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import GameCard from './GameCard'

const Library = () => {

const [games, setGames] = useState([])

useEffect(() => {
  const getGames = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/library`)
    setGames(response?.data.videogames)
  }
  getGames()
}, [])

console.log(games)

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