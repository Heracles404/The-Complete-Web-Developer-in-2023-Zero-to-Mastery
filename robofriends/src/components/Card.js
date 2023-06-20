import React from "react";

const Card = (robos) => {

    // Dynamic code for Cards per Robot

    const {name, email, id} = robos;

    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200}`} alt="Robots"/>
            <div className='tc'>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;