import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Hero from './Components/Hero';
import './HomeStyles.css'
import About from './Components/About';
import Services from './Components/Services';
// import Modal from './Components/Modal';
import CallToAction from './Components/CallToAction';
import Faq from './Components/Faq';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <div>
   <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <CallToAction/>
    <Faq/>
    <Footer/>
    </div>
  )
}

export default Home