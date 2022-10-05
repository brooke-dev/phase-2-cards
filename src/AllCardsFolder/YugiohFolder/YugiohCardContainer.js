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
        
        />
    ))

    return(
        {renderYugiohCards}
    )
}

export default YugiohCardContainer