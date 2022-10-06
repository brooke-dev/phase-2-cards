import React from "react";

function YugiohCardDetails({image,name,comment,cardType,cardRarity}){
    return (
        <div className="card"> 
            <img src={image} alt={name} className="card__image" />
            <h2>{name}</h2>
            <p>Comment:{comment}</p>
            <p>Card Tyoe: {cardType}</p>
            <p>Card Rarity: {cardRarity}</p>
        </div>
    )
}

export default YugiohCardDetails