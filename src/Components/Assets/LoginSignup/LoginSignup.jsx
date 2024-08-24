import React, { act } from 'react'
import "./LoginSignup.css"
import name_icon from "./name.png"
import email_icon from "./email.png"
import pass_icon from "./pass.png"


export default function LoginSignup (){

    const [action, setAction] = React.useState("Sign Up")

  return (
    <div className='container'>
        <div className='header'>
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        
        <div className="inputs">
        {action === "Login"? <div></div> : <div className="input">
                <img src={name_icon} />
                <input type="text" placeholder='Name' />
            </div>}
            <div className="input">
                <img src={email_icon} />
                <input type="email" placeholder='Email id' />
            </div>
            <div className="input">
                <img src={pass_icon} />
                <input type="password" placeholder='Password' />
            </div>
        </div>
        {action === "Sign Up"? <div></div> : <div className="forget-pass">Lost Password? <span>Click here!</span></div>}
        <div className="submit-container">
            <div className={action === "Login"? "gray" : "submit"} onClick={() => setAction("Sign Up")}>Sign Up</div>
            <div className={action === "Sign Up"? "gray" : "submit"} onClick={() => setAction("Login")}>Login</div>
        </div>
    </div>
  )
}
