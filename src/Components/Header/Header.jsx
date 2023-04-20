import React from 'react'
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import './header.css'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    const logout = ()=>{
        localStorage.removeItem("token")
    }
    return (
        <div className="header">
            <div className="logo">
                <LocalDiningIcon className='logo_stick'></LocalDiningIcon>
                <span className='logo_name'>Recipe App</span>
            </div>
            <ul className="list">
                <li><Link to={'/home'} style={{color:"black"}}>HOME</Link> </li>
                <li><Link to={'/home'} style={{color:"black"}}>PROFILE</Link> </li>
                <li><Link to={'/'} onClick={logout} style={{color:"black"}}>LOGOUT</Link> </li>
            </ul>
        </div>
    )
}

export default Header