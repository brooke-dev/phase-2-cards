import React from "react";
import MagicCardDetails from "./MagicCardDetails"

function MagicCardContainer({magic}){

    const renderMagicCards=magic.map((oneMagic)=>(
        <MagicCardDetails 
        key={oneMagic.id}
        id={oneMagic.id}
        name={oneMagic.name}
        image={oneMagic.image}
        comment={oneMagic.comment}
        
        />
    ))

    return(
        <div className= "cards">
            {renderMagicCards}
        </div>
        
    )

}

export default MagicCardContainer