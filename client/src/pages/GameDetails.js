import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import UpdateGame from '../components/UpdateGame'
import axios from 'axios'
import NavBar from '../components/NavBar'

const GameDetails = () => {
  let { gameId } = useParams()

  const initialState = {
    userName: '',
    content: '',
    rating: '',
    gameId: gameId
  }
  const [gameDetails, setGameDetails] = useState(null)
  const [formState, setFormState] = useState(initialState)

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
    <div>
      <NavBar />
      <div className="game-content">
        <section className="image-container">
          <div>
            <img src={gameDetails?.poster} />
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
      <section className="comments">
        <div>
          <textarea id="comment" cols="30" rows="10"></textarea>
        </div>
      </section>
    </div>
  )
}

export default GameDetails
