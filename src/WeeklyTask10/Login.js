import React from 'react'

export default function Login() {
    return (
        <div className="maindiv">
            <form action="">
                <input type="text" id="username"   placeholder="Username" /> <br />
                <input type="password" placeholder="password" /><br />
                <button id="loginbtn" >Login</button>
                <p>Please Login with your username and Password</p>
            </form>
        </div>
    )
}
