import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Library from '../components/Library'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="library">
        <Library />
      </div>
      <div className="genres">{/* <h2>Genre List Goes Here</h2> */}</div>
    </div>
  )
}

export default Home
