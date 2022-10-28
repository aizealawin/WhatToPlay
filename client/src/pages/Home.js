import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Library from '../components/Library'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <div>
      <img src="https://cdn.discordapp.com/attachments/725175628936118375/1035580054098423920/WhatToPlay_300_75_px_1.png" />
      <NavBar />
      <div className="library">
        <Library />
      </div>
      <div className="genres">{/* <h2>Genre List Goes Here</h2> */}</div>
    </div>
  )
}

export default Home
