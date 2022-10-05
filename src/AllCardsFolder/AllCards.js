import React from "react";
import PokemonCardContainer from "./PokemonFolder/PokemonCardContainer";
import YugiohCardContainer from "./YugiohFolder/YugiohCardContainer";
import MagicCardContainer from "./MagicFolder/MagicCardContainer";

function AllCards(
    {pokemon,
    magic,
    yugioh,
    renderCheckedPokemonCards,
    renderCheckedMagicCards,
    renderCheckedYugiohCards}
){
    return (
        <div>
            <PokemonCardContainer 
            pokemon={pokemon} 
            renderCheckedPokemonCards={renderCheckedPokemonCards}
            />
            <YugiohCardContainer 
            yugioh={yugioh}
            renderCheckedYugiohCards={renderCheckedYugiohCards}
            />
            <MagicCardContainer 
            magic={magic}
            renderCheckedMagicCards={renderCheckedMagicCards}
            />  
        </div>
        
    )
}

export default AllCards