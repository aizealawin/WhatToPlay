// This page is going to be a form that adds a game to our library

import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'


const AddGame = () => {

  const [games, setGames] = useState([])

useEffect(() => {
  const getGames = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/library`
    )
    console.log(response)
  }
  getGames()
}, [])


  return (
    <div> 
      <Link to='/'>Home</Link> 
      <form >
        Add Game Here <br/>
        <input type='text' name={'name'} placeholder={'name'}/>
        <input type='text' name={'poster'} placeholder={'poster link'}/>
        <input type='text' name={'developer'} placeholder={'developer'}/>
        <input type='text' name={'description'} placeholder={'description'}/>
      </form>
    </div>
  )
}

export default AddGame