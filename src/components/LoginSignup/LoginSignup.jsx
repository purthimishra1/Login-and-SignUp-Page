import React, { useState } from 'react'
import './LoginSignup.css'
import email_icon from '../Assets/email.png'
import person_icon from'../Assets/person.png'
import password_icon from'../Assets/password.png'

const LoginSignup=() => {
    const[action,setAction]=useState("Login");

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <img src={person_icon} alt="" />
                <input type="text" placeholder='Name' />
            </div>}
            
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email Id' />
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password"  placeholder='Password'/>
            </div>
        </div>
        
        {action==="Login"?<div className="forgot_password">Lost Password?<span>click here!</span></div>:<div></div>}
        <div className="submit_container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}
export default LoginSignup;