import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

     const [click,setClick] = useState(false)

      const handleClick = ()=>{
        setClick(!click)
      }

      const [color,setColor] = useState(false);

      const handleColor = ()=>{
        if(window.scrollY >= 250){
            setColor(true)
        }
        else(
            setColor(false)
        )
      }

    window.addEventListener("scroll",handleColor);

    return (

        
        <nav className= {color ? "color" : ""}>
            <div className="log">
                <h1>GLX TRVL</h1>
            </div>

            <div className= { click ? " menu active" :"menu" }>
                <Link to="/" >Home</Link>
                <Link to="/pricing"  >Price</Link>
                <Link to="/training"  >Traning</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="hamburger" onClick={handleClick}>
                {
                 click ?   (<FaTimes style={{ color: "white" }} size={25}  />):
                  (<FaBars  style={{ color: "white" }} size={25}  />)

                }
                

            </div>


        </nav>
    )
}

export default Navbar