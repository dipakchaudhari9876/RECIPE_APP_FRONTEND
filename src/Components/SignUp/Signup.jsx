import React, { useState } from 'react'
import './signup.css'
import Axios from "axios";
const url = process.env.REACT_APP_API;


const Signup = ({ temp }) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [Cpassword, setCpassword] = useState("")
  const [error,setError] = useState("")

  const onClickSubmit = async(e) => {
    e.preventDefault()
    const data = {email, password, Cpassword}
    try{
      const registerData = await Axios.post(`${url}/api/user/register`,data)
      alert(registerData.data.message)
      setError("")
      temp(true)

    }catch(err){
      setError(err.response.data.error)
    }
  }

  const change = () => {
    temp(true)
  }
  return (
    <div className="signup">
      <h1 className='signIn_head'>Sign Up</h1>
      <form onSubmit={onClickSubmit}>
        <div className='input'>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" placeholder='EMAIL'
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            value={email}
          />
        </div>
        <div className='input'>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder='PASSWORD'
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            value={password}
          />
        </div>
        <div className='input'>
          <label htmlFor="pass">Confirm Password</label>
          <input type="password" id="pass" placeholder='CONFIRM PASSWORD'
            onChange={(e) => {
              setCpassword(e.target.value)
            }}
            value={Cpassword}
          />
        </div>
        {error && <div style={{color:"red"}} className="error">{error}</div> }

        <button className='btn-signup' type="submit">SIGN UP</button>
      </form>
      <div className="bottom_signup">
        <div className='bottom_line' onClick={change}>Already have an account?</div>
      </div>
    </div>
  )
}

export default Signup