import React from 'react';
import {  FaTimes } from 'react-icons/fa'

const Modal = ({handleModal}) => {

   
  return (
   <>
   <div className="overlay">
    <div className="modal">
        <div className="cross">
        <FaTimes style={{ color: "white" }} size={25} onClick={handleModal} />
        </div>
        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, obcaecati? Autem sit vero nulla reiciendis eius iste impedit animi nobis.</h2>
    </div>
   </div>

   
   </>
  )
}

export default Modal