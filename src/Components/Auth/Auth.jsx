import React, { useState } from 'react'
import SignIn from '../SignIn/SignIn'
import './auth.css'
import Signup from '../SignUp/Signup'

const Auth = () => {
    const [signIn, setSignIn] = useState(true)
    return (
        <div className="main" style={{backgroundColor:signIn?"rgb(34, 121, 234)":"rgb(224, 82, 89)"}}>
            <div className="Auth">
                {signIn? <SignIn temp={setSignIn}/>:<Signup temp={setSignIn}/>}
            </div>
        </div>
    )
}

export default Auth