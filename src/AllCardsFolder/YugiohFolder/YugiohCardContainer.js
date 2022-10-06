import React from "react";
import YugiohCardDetails from "./YugiohCardDetails"

function YugiohCardContainer({yugioh}){

    const renderYugiohCards=yugioh.map((oneYugioh)=>(
        <YugiohCardDetails 
        key={oneYugioh.id}
        id={oneYugioh.id}
        name={oneYugioh.name}
        image={oneYugioh.image}
        comment={oneYugioh.comment}
        cardType={oneYugioh["card-type"]}
        cardRarity={oneYugioh["card-rarity"]}
        
        />
    ))

    return(
        <div className="yugiohCards">
            {renderYugiohCards}
        </div>
        
    )
}

export default YugiohCardContainer