import React from 'react'
import { useNavigate } from 'react-router'

function Contact() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/profile')
    }
    const handleReturn =() => {
        navigate('/')
    }
  return (
    <div>
      Contact page loaded...
      <button onClick={handleClick}> Profile page</button>
      <button onClick={handleReturn}> Return</button>
    </div>
  )
}

export default Contact
