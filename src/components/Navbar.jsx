import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../Styles/Navbar.css'

function Navbar() {
  const [expandNavbar, setExpandNavbar]= useState(false)

const location = useLocation();

useEffect(()=>{
setExpandNavbar(false);
},[location])



  return (
    <div className='navbar' id={expandNavbar ? "open": "close"}>
      <div className="toggleButton">
        <button onClick={()=>{
          setExpandNavbar((prev)=> !prev);
        }} type="submit" id='btn'><i className="fa fa-bars"></i></button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/experience">Experience</Link>
      </div>


    </div>
  )
}

export default Navbar
