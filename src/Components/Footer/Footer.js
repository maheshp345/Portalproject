import React from 'react'
import { Link } from 'react-router-dom'
import fb from '../../assets/facebook.png';
import insta from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';

import './Footer.css'

const Footer = () => {

    const social = [fb,insta,twitter];

  return (
    <>
    <footer>
      <h1>GLX TRVL</h1>

      <div className="links">
        <Link to ="/" >Home</Link>
        <Link to ="/training" >Training</Link>
        <Link to ="/pricing" >Pricing</Link>
        <Link to ="/contact" >contact</Link>
      </div>
      <div className="icons">
        {
            social.map((item)=>{
              return  <img src={item} alt="" />
            })
        }
      </div>

   </footer>
    
    
    </>
  )
}

export default Footer