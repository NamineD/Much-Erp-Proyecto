import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoute = () => {


    const isLoggedIn = localStorage.getItem('token')

  return (
    <div>
        { isLoggedIn ? <Outlet/> : <Navigate to="/auth/login" /> }
    </div>
  )
}

export default PrivateRoute
