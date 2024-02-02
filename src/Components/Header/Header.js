import React from 'react';
import Bgimg from '../../assets/background.img'


import './Header.css'


const Header = ({heading}) => {
  return (
    <>
    <section className="header" 
    style = {{
        backgroundImage : `url(${Bgimg})`,
        backgroundSize: "cover",
        backgroundPosition:"fixed"

    }}
    >
    <h1>{heading}</h1>
    <p>Lorem ipsum dolor sit amet.</p>
    </section>
    
    </>
  )
}

export default Header