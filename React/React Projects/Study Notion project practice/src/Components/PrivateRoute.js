import React from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRoute({isLoggedIn,children}) {
    console.log(isLoggedIn)
    if (isLoggedIn) {
        return children
    } else {
        console.log("inside else")
       return <Navigate to="/login"></Navigate> 
    }
 
}

export default PrivateRoute