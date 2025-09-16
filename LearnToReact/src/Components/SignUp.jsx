import React from 'react'
import { useState } from 'react'
import styles from './SignUp.module.css'
import { useNavigate } from 'react-router-dom'


const SignUp = () => {

    let navigate = useNavigate();

    let [Name, setName] = useState("")
    let [Email, setEmail] = useState("")
    let [Password, setPassword] = useState("")
    let [Cpassword, setCpassword] = useState("")


    function HandleSubmit(dets) {
        dets.preventDefault();

        


        if (!Name || !Email || !Password || !Cpassword) {
            alert("All Fields are Mandatory");
        }

        if (Password != Cpassword) {
            alert("Passwords Don't Match")
        }

        const newUser={
        "username": Name,
        "email":Email,
        "password":Password,
    }

    localStorage.setItem("user",JSON.stringify(newUser));


    }


    return (
        <div className={styles.container}>
            <h1>Sign Up</h1>

            <form onSubmit={HandleSubmit} >
                <input type="text" placeholder='Enter Your Name' value={ Name } onChange={ (dets)=> setName(dets.target.value) } />
                <input type="Email" placeholder='Enter Your Email' value={ Email } onChange={ (dets)=> setEmail(dets.target.value)} />
                <input type="password" placeholder='Enter Password' value={ Password } onChange={ (dets)=> setPassword(dets.target.value)} />
                <input type="password" placeholder='Confirm Password' value={ Cpassword } onChange={ (dets)=> setCpassword(dets.target.value) } />
                <button type='submit'>SIGN UP</button>

            </form>
            <p>Already have account? <button onClick={ ()=> navigate('/LogIn') } >Login</button></p>


        </div>
    )
}

export default SignUp
