import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContex'

const Products = () => {
    const {isAuthorized}=useContext(AuthContext)
  return (
    <div>
        Product:{isAuthorized ? 'LoginIn':"LogOut"}
    </div>
  )
}

export default Products