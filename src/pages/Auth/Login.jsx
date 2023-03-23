import React from 'react'
import {Link} from 'react-router-dom'

export default function Login(){
    return (
        <div className="login-page">
            <h1>Login</h1>
            <form className="login-form">
                <input type="text" placeholder="email" required></input>
                <input type="password" placeholder="password" required></input>
                <button>Login</button>
                <Link to="reset">Forgot Password</Link>
            </form>
            <p>--or--</p>
            <button>Login with Google</button>
            <p>Dont have an account? {<Link to="register">Register</Link>}</p>
            </div>
    )
}