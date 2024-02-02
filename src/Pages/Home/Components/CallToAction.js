import React from 'react'
import Modal from './Modal'
import { useState } from 'react'


const CallToAction = () => {
  
    const [modal,setmodal] = useState(false) 
const handleModal = ()=>{
    setmodal(!modal)
}


  return (
   <>
   <section className="call-to-action">
     <h2>Hurry up Book your Slot</h2>
      <button className='buttonm' onClick={handleModal}> Know More!</button>

   </section>
    
    {
        modal ? <Modal handleModal={handleModal}/> : ""
    }
   
   </>

  )
}

export default CallToAction