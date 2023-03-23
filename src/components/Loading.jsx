import React from 'react'
import ReactDOM from 'react-dom'

export default function Loading(){
    return ReactDOM.createPortal(
        <h1>Loading ...</h1>, document.getElementById('loader')
    )
}