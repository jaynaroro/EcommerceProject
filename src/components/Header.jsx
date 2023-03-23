import React from 'react'
import {NavLink,useNavigate} from 'react-router-dom'
import { auth } from '../firebase/firebaseconfig'
import { signOut, onAuthStateChanged } from "firebase/auth";
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



export default function Header(){
    const navigate= useNavigate()

    const [userName,setUserName] = React.useState("")

    const activeSyle={
        textDecoration: 'underline',
        color: 'black'
    }

    const logoutUser = () => {
        signOut(auth).then(() => {
            toast.success("Logged Out")
            navigate("/")
          }).catch((error) => {
            toast.error(error)
        });
    }

    //currently signed in User
    React.useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              setUserName(user.displayName)
            } else {
              // User is signed out
              // ...
              setUserName("")
            }
          });
    },[])

    return (
        <>
        <ToastContainer />
        <div className="header">
            <NavLink style={({isActive})=>isActive ? activeSyle : null} to="/">Home</NavLink>
            <NavLink style={({isActive})=>isActive ? activeSyle : null} to="login">Login</NavLink>
            <NavLink style={({isActive})=>isActive ? activeSyle : null} to="contact">Contact Us</NavLink>
            <NavLink style={({isActive})=>isActive ? activeSyle : null} to="cart">Cart</NavLink>
            {/*add the logged in users name here somewhere*/}
            <NavLink style={({isActive})=>isActive ? activeSyle : null} to="orders">Orders</NavLink>
            <NavLink onClick={logoutUser}>Logout</NavLink>
        </div></>
 
    )
}