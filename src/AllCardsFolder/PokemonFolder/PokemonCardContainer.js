import React from "react";

import PokemonCardDetails from "./PokemonCardDetails"

function PokemonCardContainer({pokemon}){

    const renderPokemonCards=pokemon.map((onePokemon)=>(
        <PokemonCardDetails 
        key={onePokemon.id}
        id={onePokemon.id}
        // pokemon={pokemon}
        name={onePokemon.name}
        image={onePokemon.image}
        comment={onePokemon.comment}
        />
    ))

    return (

        <div className="cards"> 
           {renderPokemonCards}
        </div>
            
    )
}

export default PokemonCardContainer