import React from "react";

function PokemonCardDetails({name,image,comment}){
    return(
        <div className="card"> 
            <img src={image} alt={name} className="card__image" />
            <h2>{name}</h2>
            <p>{comment}</p>
        </div>
    )
}

export default PokemonCardDetails