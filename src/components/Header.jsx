import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Header(){
    const activeSyle={
        textDecoration: 'underline',
        color: 'black'
    }

    return (
        <div className="header">
            <NavLink style={({isActive})=>isActive ? activeSyle : null} to="/" end>Home</NavLink>
            <NavLink style={({isActive})=>isActive ? activeSyle : null} to="admin">Admin</NavLink>
            <NavLink style={({isActive})=>isActive ? activeSyle : null} to="contact">Contact Us</NavLink>
            <NavLink style={({isActive})=>isActive ? activeSyle : null}to="cart">Cart</NavLink>
            <NavLink style={({isActive})=>isActive ? activeSyle : null} to="orders">Orders</NavLink>
        </div>
    )
}