import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {
  return (
    <div>
      <nav className="navBar">
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/addGame">
          <h1>Add Game</h1>
        </Link>
      </nav>
      <div className="library">
        <h2>Library Goes Here</h2>
      </div>
      <div className="genres">
        <h2>Genre List Goes Here</h2>
      </div>
    </div>
  )
}

export default Home
