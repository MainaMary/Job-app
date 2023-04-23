import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

interface Props {
    children :ReactNode | JSX.Element
}
const ProtectedRoute = ({children}:Props) => {
const user = true
  return <div>{user ? children : <Navigate to="/"/>}</div>
    
  
}

export default ProtectedRoute