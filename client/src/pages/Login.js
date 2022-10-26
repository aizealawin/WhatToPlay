import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Login = () => {
  const [loginState, setFormState] = useState(initialState)

  useEffect(() => {
    const newUser = async () => {
      try {
        let res = await axios.get('http://localhost:3001/login')
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }
  })

  return <div></div>
}
