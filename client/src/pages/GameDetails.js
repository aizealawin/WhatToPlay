import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const GameDetails = () => {
  const [gameDetails, setGameDetails] = useState(null)

  let { gameId } = useParams()

  // const getGameDetails = async () => {
  //   const response = await axios.get(
  //     `https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`
  //   )
  //   setGameDetails(response.data)
  // }

  // useEffect(() => {
  //   getGameDetails()
  // }, [])

  useEffect(() => {
    const getGameDetails = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/library/${gameId}`
      )
      console.log(response)
      setGameDetails(response.data)
    }
    getGameDetails()
  }, [gameId])

  return (
    <div className="game-content">
      {/* <section className="image-container">
        <div>
          <h3>{gameDetails.poster}</h3>
        </div>
      </section>
      <section className="details">
        <div className="flex-row space"></div>
        <div>
          <h3>{gameDetails?.name}</h3>
        </div>
        {gameDetails?.description}
      </section> */}
    </div>
  )
}

export default GameDetails
