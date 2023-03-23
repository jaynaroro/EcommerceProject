import React from 'react'
import {Link} from 'react-router-dom'
import { sendPasswordResetEmail } from "firebase/auth";
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { auth } from '../../firebase/firebaseconfig';


export default function Reset()
{
    const [email,setEmail] = React.useState("")

    const resetPassword = (e) => {
        e.preventDefault()
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
                toast.success("Password reset email sent!")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage)
                // ..
            });
    }

    return (
        <>
        <ToastContainer />
           <div className="reset-page">
                                    <h1>Reset</h1>
            <form className="reset-form" onSubmit={resetPassword}>
                <input 
                type="text" 
                placeholder="email"
                value={email}
                required></input>
                <button type="submit">Reset Password</button>
            </form>
            <section className="reset-links"><Link to="login">Login</Link> <Link to="register">Register</Link></section>
        </div></>
     
    )
}