import React, { useState } from 'react'
import "./Login.css"
import { IoCloseCircle } from 'react-icons/io5'

import { FaGoogle } from "react-icons/fa"


function Login({ setLogin }) {

    const [sign, setSign] = useState("Sign-in")
    const [password, setPassword] = useState("Password")
    const [newpass, setNewPass] = useState(false);
    const [welcome, setWeelcome] = useState("Welcome back")


    const createNew = (id) => {
        if (id === 1) {


            setPassword("Enter password")
            setSign("Create new");

            setNewPass(true);
            setWeelcome("Create Account")

        }
        if (id === 2) {

            setPassword("Password")
            setSign("Sign-in");

            setNewPass(false);
            setWeelcome("Welcome Back")

        }

    }

    const [view, setView] = useState(true);



    return (
        <div className='login-container'>

            <div className='login-all'>
                <h1>  {welcome}</h1>
                <IoCloseCircle id='close-btn' onClick={() => setLogin(false)} />
                <div className="login-input">

                    <label >Email</label>
                    <input type='mail' id='email' required />

                    <label >{password}</label>
                    <input type={view === true ? 'password' : "text"} id='pass' required />

                    {newpass && <>
                        <label >Confirm password</label>
                        <input type={view === true ? 'password' : "text"} id='pass' />
                    </>}
                    <div className='pass-all'>
                        <div className='view'>
                            <input type='checkbox' id='check' onChange={() => setView(!view)} />
                            <label htmlFor='#check'>show</label>
                        </div>

                        <p style={newpass === true ? { display: "none" } : { display: "block" }}>Forgot password ?</p>

                    </div>

                </div>

                <div className='login-btn'>
                    <button>{sign}</button>
                    <p id='log-with'> <hr /> Or  <hr /></p>
                    <button><FaGoogle id='google' /> {sign} with google</button>
                    <p style={newpass === true ? { display: "none" } : { display: "block" }} id='new-ac'>Don't have an account ?<span onClick={() => createNew(1)}> Create new</span></p>
                    <p style={newpass === true ? { display: "block" } : { display: "none" }} id='back' onClick={() => createNew(2)}>   Back</p>

                </div>
            </div>
        </div>


    )
}

export const newPassIn = () => {

    return <>
        <label >Confirm password</label>
        <input type='password' id='pass' />
    </>
}

export default Login