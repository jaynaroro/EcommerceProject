import React from 'react'
import {NavLink,useNavigate} from 'react-router-dom'
import { auth } from '../firebase/firebaseconfig'
import { signOut, onAuthStateChanged } from "firebase/auth";
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useDispatch} from 'react-redux'
import { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } from '../Redux/slice/authSlice';
import {ShowOnLogin,ShowOnLogout} from './HiddenLinks';



export default function Header(){
    const navigate= useNavigate()

    const [userName,setUserName] = React.useState("")

    const activeSyle={
        textDecoration: 'underline',
        color: 'black'
    }

    const logoutUser = () => {
        signOut(auth).then(() => {
            navigate("/")
            toast.success("Logged Out")
          }).catch((error) => {
            toast.error(error)
        });
    }

    const dispatch = useDispatch()

    //currently signed in User
    React.useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              if(user.displayName == null){
                const name1 = user.email.substring(0, user.email.indexOf("@"));
                const name = name1.charAt(0).toUpperCase() + name1.slice(1)
                setUserName(name)}else{
                    setUserName(user.displayName)
                }

              dispatch(SET_ACTIVE_USER({
                email: user.email,
                userName: user.displayName ? user.displayName : userName,
                userID: user.uid
              }))
            } else {
              // User is signed out
              // ...
              setUserName("")
              dispatch(REMOVE_ACTIVE_USER)
            }
          });
    },[])

    return (
        <>
        <ToastContainer />
        <div className="header">
            <NavLink style={({isActive})=>isActive ? activeSyle : null} to="/">Home</NavLink>
            <ShowOnLogout>
              <NavLink style={({isActive})=>isActive ? activeSyle : null} to="login">Login</NavLink>
            </ShowOnLogout>
            <NavLink style={({isActive})=>isActive ? activeSyle : null} to="contact">Contact Us</NavLink>
            {/*add the logged in users name here somewhere*/}
            <ShowOnLogin>
              <NavLink style={({isActive})=>isActive ? activeSyle : null} to="orders"> My orders</NavLink>
              <NavLink style={({isActive})=>isActive ? activeSyle : null} to="cart">Cart</NavLink>
              <NavLink onClick={logoutUser}>Logout</NavLink>
            </ShowOnLogin>
        </div></>
 
    )
}