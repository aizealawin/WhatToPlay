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

  const delGame = async () => {
    const response = await axios.delete(
      `http://localhost:3001/api/deleteGame/${gameId}`
    )
  }

  const handleDelClick = (e) => {
    delGame()
  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post(`http://localhost:3001/api/addComment`, formState)

    setFormState(initialState)
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
        Comment Below
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="userName"
              value={formState.userName}
              placeholder={'username'}
              onChange={handleChange}
            />{' '}
            <br />
            <textarea
              id="content"
              cols="30"
              rows="10"
              value={formState.content}
              onChange={handleChange}
            ></textarea>
            <br />
            <input
              type="text"
              id="rating"
              onChange={handleChange}
              value={formState.rating}
              placeholder={'rating'}
            />
            <button type="submit">Post Comment</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default GameDetails
