// This page is going to be a form that adds a game to our library

import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from './NavBar'

const UpdateGame = () => {
const BASE_URL = '/api'


  let { gameId } = useParams()

  const initialState = {
    name:"",
    description:""
  }
  const [gameDetails, setGameDetails] = useState(null)
  const [formState, setFormState] = useState(initialState)


  useEffect(() => {
    const getGameDetails = async () => {
      const response = await axios.get(
        `${BASE_URL}/library/${gameId}`
      )
      setGameDetails(response.data.videogame)
    }
    getGameDetails()
  }, [gameId])

const handleChange = (e) => {
  setFormState({...formState, [e.target.id]: e.target.value})
}

const handleSubmit = (event) => {
  event.preventDefault()    
  axios.put( `${BASE_URL}updateGame/${gameId}`, formState)

  setFormState(initialState)
}



  return (
    <div> 
      <NavBar />
      <form onSubmit={handleSubmit}>
        Update Game Here <br/>   
        <input 
        type='text' 
        id='name'
        onChange={handleChange} 
        value={formState.name} 
        placeholder={'name'}
        />

        <input
        type='text' 
        id='description'
        onChange={handleChange} 
        value={formState.description} 
        placeholder={'description'}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default UpdateGame