import React from "react";

function PokemonSort({pokemonSort,setPokemonSort}){

    function handlePokedexClick(event){
        setPokemonSort(event.target.checked)
       }

    return (
        
        <form className="pokedex">
        <label htmlFor="sort">Pokedex Number!</label>
            <input id="sort"
            type="checkbox"
            checked={pokemonSort}
            onChange={handlePokedexClick}
            />
        </form>

    )
}

export default PokemonSort