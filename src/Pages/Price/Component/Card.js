import React from 'react'
import SingleCard from '../SingleCard'

const Card = () => {

  const data = [
    {
        id:1,
        heading:"Basic",
        Price: "5 Lakhs",
        acces :"No Unlimited Acces",
        food : "No Food"

    },
    {
        id:2,
        heading:"Medium",
        Price: "8 Lakhs",
        acces :"Unlimited Acces",
        food : "No Food"

    },
    {
        id:3,
        heading:"Premium",
        Price: "10 Lakhs",
        acces :"Unlimited Acces",
        food : "With Food"
        

    },
]

  return (
    <div>
     <section className="Card">
       <h1 className='heading'>Pricing</h1>

       <div className='row' >
           {
            data.map((item)=>{
                const {heading,Price,acces,food} = item
                return <SingleCard heading={heading} line1={Price} line2={acces} line3={food} />
            })
           }
       </div>

     </section>

    </div>
  )
}

export default Card