import React from 'react'
import {Link} from 'react-router-dom'

export default function Reset()
{
    return (
        <div className="reset-page">
                                    <h1>Reset</h1>
            <form className="reset-form">
                <input type="text" placeholder="email" required></input>
                <button>Reset Password</button>
            </form>
            <section className="reset-links"><Link to="login">Login</Link> <Link to="register">Register</Link></section>
        </div>
    )
}