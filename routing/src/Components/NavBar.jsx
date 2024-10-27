import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div style={{
        display:"flex", 
        gap:"30px"}}>
      <Link to='/'> Home</Link>
      <Link to='/about'> About</Link>
      <Link to='/contact'> Contact</Link>
      <Link to='/profile'> Profile</Link>
    </div>
  )
}

export default NavBar
