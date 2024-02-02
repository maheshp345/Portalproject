import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import img1 from '../../../assets/slider.img1.avif'
import img2 from '../../../assets/slider.img2.avif'
import img3 from '../../../assets/slider.img3.avif'
import img4 from '../../../assets/slider.img4.avif'
import img5 from '../../../assets/slider.img5.avif'





const Services = () => {

 const images = [img1,img2,img3,img4,img5];



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1424,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };


  return (
    
    <>
    <h1 className='heading'>Services</h1>
    <section className="services">
     <Slider {...settings}>

      {
       images.map((image)=>{
        return <img src= {image} alt="" />
       })

      }


     </Slider>


    </section>
    
    
    
    
    </>
  )
}

export default Services