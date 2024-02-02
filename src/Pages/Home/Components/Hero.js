import React from 'react'
import video from '../../../assets/space.mp4'
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <div className='hero'>

            <video src={video} autoPlay loop muted />
            <div className="content">
                <h1>Travel. Galaxies</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, reiciendis.</p>
                <div className="buttons">
                    <Link to ="/pricing" > Try Now!</Link>
                    <Link to ="/contact" > Launch!</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero