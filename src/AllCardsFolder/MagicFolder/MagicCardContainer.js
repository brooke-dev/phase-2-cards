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
        collectorNumber={oneMagic["collector-number"]}
        typeLine={oneMagic["type-line"]}
        expansionSymbol={oneMagic["expansion-symbol"]}
        
        />
    ))

    return(
        <div className= "magicCards">
            {renderMagicCards}
        </div>
        
    )

}

export default MagicCardContainer