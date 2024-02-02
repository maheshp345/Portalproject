import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Card from './Component/Card';
import "./PriceStyles.css"
const Price = () => {
  return (
    <div>
    <Navbar/>
     <Header heading = "Pricing Page"/> 
     <Card/>
     <Footer/>
    </div>
  )
}

export default Price
