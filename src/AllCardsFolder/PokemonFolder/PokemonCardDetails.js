import React from "react";

function PokemonCardDetails({name,image,comment,pokedexNo,pokemonType,cardRarity}){
    return(
        <div className="card"> 
            <img src={image} alt={name} className="card__image" />
            <h2>{name}</h2>
            <p>Comment:{comment}</p>
            <p>Pokedex No. {pokedexNo}</p>
            <p>Pokemon Type: {pokemonType}</p>
            <p>Card Rarity: {cardRarity}</p>
        </div>
    )
}

export default PokemonCardDetails