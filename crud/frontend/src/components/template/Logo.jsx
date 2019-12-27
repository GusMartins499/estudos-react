import './Logo.css'
import React from 'react'
import logo from '../../assests/imgs/logo.jpg'
import { Link } from 'react-router-dom'

export default porps => 
    <aside className="logo">
       <Link to="/" clLinkssName="logo">
           <img src={logo} alt="logo" />
       </Link>
    </aside>