import React from 'react'
import { Navigate } from 'react-router'

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('user')
    return isAuthenticated ? children : <Navigate to="/signin" replace />
}

export default ProtectedRoute