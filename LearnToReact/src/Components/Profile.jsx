import React from 'react'
import { useState } from 'react'


const Profile = () => {

  let [user, setUser] = useState("")
  let [password, setPassword] = useState("")


 

function handleSubmit(dets){
  dets.preventDefault();
  localStorage.setItem("Username", user)
  localStorage.setItem("Password", password)
}


  return (
    <form onSubmit={ handleSubmit }>
      <h2>{user}</h2>
      <h2>{ password }</h2>
      <input type="text" placeholder='Enter Your Name' className='p-5 border-3 '
        onChange={(e)=>setUser(e.target.value)}
        value={user} />

       <input type="text" placeholder='Enter Your Password' className='p-5 border-3 '
        onChange={(e)=>setPassword(e.target.value)}
        value={password} />


        <button type='submit' className='p-5 border-3 ' >SUBMIT</button>
    </form>
  )
}

export default Profile
