import React from 'react'
import { Navigate } from 'react-router-dom'
import { getToken } from '../../Authorization/userAuth'

const StrictRoute = ({Child}) => {
  return (
    getToken() ? <Child/> : <Navigate to="/" />
  )
}

export default StrictRoute