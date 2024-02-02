import React, { useState } from 'react'

const Faq = () => {

    const data = [

        {
            question: "Question 1? ",
            answers:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint molestiae vitae ipsam quas? Quibusdam impedit fugit nisi delectus. Vero laborum fugiat, suscipit voluptate sit culpa debitis nulla officiis saepe tempora?"
        },
        {
            question: "Question 2? ",
            answers:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint molestiae vitae ipsam quas? Quibusdam impedit fugit nisi delectus. Vero laborum fugiat, suscipit voluptate sit culpa debitis nulla officiis saepe tempora?"
        },
        {
            question: "Question 3? ",
            answers:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint molestiae vitae ipsam quas? Quibusdam impedit fugit nisi delectus. Vero laborum fugiat, suscipit voluptate sit culpa debitis nulla officiis saepe tempora?"
        },
        {
            question: "Question 4? ",
            answers:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint molestiae vitae ipsam quas? Quibusdam impedit fugit nisi delectus. Vero laborum fugiat, suscipit voluptate sit culpa debitis nulla officiis saepe tempora?"
        },
        {
            question: "Question 5? ",
            answers:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint molestiae vitae ipsam quas? Quibusdam impedit fugit nisi delectus. Vero laborum fugiat, suscipit voluptate sit culpa debitis nulla officiis saepe tempora?"
        }
    ]

    const [selected, setSelected] = useState(null)

    const handleSelected = (i) => {
        if(selected===i) {
            return setSelected(null);
        }
        setSelected(i);
    };
    return (
        <>
            <h1 className='heading'>FAQs</h1>
            <section className="faq">

                <div className="item">
                    {
                        data.map((item, i) => {
                            return (
                                <>
                                <div className="wrapper" >
                                    <div className="question">
                                        <h3>{item.question}</h3>
                                        <img src={require("../../../assets/uparrow2-img.png")} alt="" key={i} onClick={()=> {handleSelected(i)}} className={selected===i  ? "arrow-reverse" : "arrow"} />
                                    </div>

                                    
                                    <div className="answers">
                                       {
                                        selected === i ? (<p >{item.answers} </p>): null
                                       } 
                                        
                                    </div>
                                    

                                </div>
                                </>
                            )
                        })
                    }
                </div>

            </section>
        </>
    )
}

export default Faq