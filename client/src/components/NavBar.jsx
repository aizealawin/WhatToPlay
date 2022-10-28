import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return(

<nav className="navBar">
<Link to="/">
  <h1>Home</h1>
</Link>
<Link to="/addGame">
  <h1>Add Game</h1>
</Link>
</nav>

  )
}

export default NavBar