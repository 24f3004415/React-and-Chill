import React from 'react'
import styles from './LogIn.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const LogIn = () => {

let navigate = useNavigate();



    let [Name, setName] = useState("")
    let [Password, setPassword] = useState("")


    function LoginHandle(){
        let data = JSON.parse(localStorage.getItem("user"));


        if (data.username != Name && data.password != Password) {
            alert('Enter a valid username and password')
        }

        if (data.username != Name) {
            alert('Enter a valid username')
        }

        if (data.password != Password) {
            alert('Enter a valid Password')
        }

        if (data.username == Name && data.password == Password) {
            alert('Login Successful')
            navigate('/minidrawer')

        }

    };
    return (
        <div className={styles.container}>
            <h1>LogIn</h1>
            <form onSubmit={LoginHandle} >
                <input type="text" placeholder='Enter Username' value={Name} onChange={(dets) => setName(dets.target.value)} />
                <input type="password" placeholder='Enter Pasaword' value={Password} onChange={(dets) => setPassword(dets.target.value)} />
                <button  >LOGIN</button>
            </form>

        </div>
    )
}

export default LogIn
