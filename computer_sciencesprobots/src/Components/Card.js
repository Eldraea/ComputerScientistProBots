import React from "react";


const Card = ({firstName, lastName, profession, id }) =>
{
    return(
        <div className="bg-light-blue dib br3 pa3 ma2 bw2 shadow-5 bg-animate hover-bg-light-yellow ">
            <img src={`https://robohash.org/${id}?200x200`} alt ={`${firstName + lastName} Robot Equivalent`}/>
            <div className='tc'>
                <h2 >{firstName}  {lastName}</h2>
                <h2>{profession}</h2>
                <p><a href={`https://en.wikipedia.org/wiki/${firstName + '_'+lastName}`}>Learn More...</a></p>
            </div>
        </div>
    );

}

export default Card;