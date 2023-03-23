import React from 'react'
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/firebaseconfig';
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Loading from '../../components/Loading';
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";


export default function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    //loading State
    const [loading, setLoading] = useState(false)

    const loginUser = (e)=>{
        e.preventDefault()
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setLoading(false)
                toast.success("Logged in Succesfully!")
                navigate("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setLoading(false)
                toast.error(errorMessage)
            });
    }

    //login with google
    const provider = new GoogleAuthProvider();
    const googleSignIn = () =>{
        signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    toast.success("Logged in!")
    navigate("/")
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    toast.error(errorMessage)
  });
    }

    return (
        <>
        <ToastContainer />
        {loading && <Loading />}
        <div className="login-page">
            <h1>Login</h1>
            <form className="login-form" onSubmit={loginUser}>
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required/>

                <input 
                    type="password" 
                    placeholder="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)} 
                    required/>

                <button type="submit">Login</button>
                <Link to="reset">Forgot Password</Link>
            </form>
            <p>--or--</p>
            <button onClick={googleSignIn}>Login with Google</button>
            <p>Dont have an account? {<Link to="/register">Register</Link>}</p>
            </div>
            </>
    )
}