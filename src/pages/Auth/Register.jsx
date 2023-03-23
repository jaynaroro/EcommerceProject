import React from 'react'
import {Link} from 'react-router-dom'

export default function Register()
{
    return(
        <div className="register-page">
                        <h1>Register</h1>
            <form className="register-form">
                <input type="text" placeholder="email" required></input>
                <input type="password" placeholder="password" required></input>
                <input type="password" placeholder="password" required></input>
                <button>Register</button>
            </form>
            <p>Already have an account {<Link to="login" relative="path">Login</Link>}</p>
        </div>
    )
}