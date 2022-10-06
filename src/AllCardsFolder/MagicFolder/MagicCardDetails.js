import React from "react";

function MagicCardDetails({image,name,comment,collectorNumber,typeLine,expansionSymbol}){
    return (
        <div className="card"> 
            <img src={image} alt={name} className="card__image"/>
            <h2>{name}</h2>
            <p> Comment:{comment}</p>
            {/* <ul>
                <li>Collector Number:{collectorNumber}</li>
                <li>Type Line: {typeLine}</li>
                <li>Expansion Symbol: {expansionSymbol}</li>
            </ul> */}
            <p>Collector Number: {collectorNumber}</p>
            <p>Type Line: {typeLine}</p>
            <p>Expansion Symbol: {expansionSymbol}</p>
        </div>
    )
}

export default MagicCardDetails