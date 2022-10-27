import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import UpdateGame from '../components/UpdateGame'
import axios from 'axios'

const GameDetails = () => {
  const [gameDetails, setGameDetails] = useState(null)

  let { gameId } = useParams()

  useEffect(() => {
    const getGameDetails = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/library/${gameId}`
      )
      setGameDetails(response.data.videogame)
    }
    getGameDetails()
  }, [gameId])

  console.log(gameDetails)

  const delGame = async () => {
    const response = await axios.delete(
      `http://localhost:3001/api/deleteGame/${gameId}`
    )
  }

  const handleDelClick = (e) => {
    delGame()
  }

  return (
    <div className="game-content">
      <section className="image-container">
        <div>
          <h3>{gameDetails?.poster}</h3>
        </div>
      </section>
      <section className="details">
        <div className="flex-row space"></div>
        <div>
          <h3>{gameDetails?.name}</h3>
        </div>
        {gameDetails?.description}
      </section>
      <Link to="/">
        <button onClick={handleDelClick}>Delete Game</button>
      </Link>
      <Link to={`/updateGame/${gameId}`}>
        <button>Update Game</button>
      </Link>
    </div>
  )
}

export default GameDetails
