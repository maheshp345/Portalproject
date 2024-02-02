import React from 'react'

const SingleCard = ({id,heading,line1,line2,line3}) => {
  return (
    <>
    <section >

        <div className="cards">
        <h2>{heading}</h2>
        <p>{line1}</p>
        <p>{line2}</p>
        <p>{line3}</p>
        </div>

    </section>
    
    </>
  )
}

export default SingleCard