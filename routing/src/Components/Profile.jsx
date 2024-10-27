import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Profile() {
  const [searchParams] =useSearchParams();
    const name = searchParams.get('name');
    const age = searchParams.get('age');
    console.log(name,age)
  return (
    <div>
      Profile page loaded... 
      {name && <div> Hi {name}</div>}
    </div>
  )
}

export default Profile
