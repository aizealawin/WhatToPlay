// displays game details

const GameCard = ({poster, name, description}) => {

  return (
    <div className='game-card'>
      <div className="poster">
        {/* <h3>{poster}</h3> */}
        <img className='rendered-poster' src={poster} />
      </div>
      <div className='name-desc'>
        <h3>{name}</h3>
        {/* <h3>{description}</h3> */}
      </div>
    </div>
  )
}

export default GameCard