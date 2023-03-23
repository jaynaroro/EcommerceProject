import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/firebaseconfig';
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Loading from '../../components/Loading';

export default function Register()
{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigate = useNavigate()

    //loading State
    const [loading, setLoading] = useState(false)

    const registerUser = (e) => {
        e.preventDefault()
        if(password !== confirmPassword){
            toast.error("Passwords do not match")
        }

        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                setLoading(false)
                toast.success("Registration Successfull")
                navigate("/login")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage)
                setLoading(false)
    // ..
  });
    }

    return(
        <>
        <ToastContainer />
        {loading && <Loading />}
        <div className="register-page">
                        <h1>Register</h1>
            <form className="register-form" onSubmit={registerUser}>
                <input
                    type="text" 
                    placeholder="email"
                    value={email}
                    onChange={(event)=>setEmail(event.target.value)}
                    required/>

                <input 
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(event)=>setPassword(event.target.value)}
                    required/>

                <input 
                    type="password" 
                    placeholder="password"
                    value={confirmPassword} 
                    onChange={(event)=>setConfirmPassword(event.target.value)} 
                    required/>

                <button>Register</button>
            </form>
            <p>Already have an account {<Link to="/login">Login</Link>}</p>
        </div>
        </>
    )
}