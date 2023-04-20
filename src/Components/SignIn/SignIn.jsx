import React, { useState } from 'react'
import './signin.css'

import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
const url = process.env.REACT_APP_API

const SignIn = ({ temp }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error,setError] = useState("")
    const navigate = useNavigate()

    const onClickSubmit = (e) => {
        e.preventDefault()
        const data = {email,password}
        // console.log(data)
        const login = async(data)=>{
            try {
                const loginData = await Axios.post(`${url}/api/user/login`,data)
                localStorage.setItem("token",JSON.stringify(loginData.data.token))
                alert(loginData.data.message)
                setError("")
                navigate('/home')

                
                // console.log(login)
                setEmail("")
                setPassword("")
    
            } catch (err) {
                setError(err.response.data.error)
            }
        }
        login(data)
        

    }

    const change = () => {
        temp(false)
    }

    return (
        <div className="signIn">
            <h1 className='signIn_head'>Sign In</h1>
            <form className='form' onSubmit={onClickSubmit}>
                <div className='input'>
                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" placeholder='Enter email'
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        value={email}
                    />
                </div>
                <div className='input'>
                    <label htmlFor="pass">Password</label>
                    <input type="password" id="pass" placeholder='Enter password'
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        value={password}
                    />
                </div>
                {error && <div style={{color:"red"}} className="error">{error}</div> }
                <button className='btn-signin' type="submit">Sign In</button>
            </form>
            <div className='bottom'>
                <div className='account'>Don't have an account?<span onClick={change}>&nbsp;Register</span></div>
                <div className="forgot">Forgot Password?</div>
            </div>
        </div>
    )
}

export default SignIn