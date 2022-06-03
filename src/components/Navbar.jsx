import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContex'

const Navbar = () => {
    const {isAuthorized,login,logout}=useContext(AuthContext)
  return (
    <div>
        <button onClick={()=>{
            if(isAuthorized){
                logout()
            }
            else{
                
                login('R','L')
            }
        }}>{isAuthorized ? 'Logout':'Login'}</button>
    </div>
  )
}

export default Navbar