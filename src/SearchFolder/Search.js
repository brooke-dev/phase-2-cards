import React from "react";
import "./SearchCSS.css";

function Search({setRenderCheckedPokemonCards,
    renderCheckedPokemonCards,
    setRenderCheckedMagicCards,
    renderCheckedMagicCards,
    setRenderCheckedYugiohCards,
    renderCheckedYugiohCards,
    searchBar,
    setSearchBar,
    pokemonSort,
    setPokemonSort,
    yugiohSort,
    setYugiohSort,
    magicSort,
    setMagicSort}){
   function handleChangeSortBy(event){
    setSearchBar(event.target.value)
   }

//    function handlePokemonClick(event){
//     setRenderCheckedPokemonCards(event.target.checked)
//    }

//    function handleYugiohClick(event){
//     setRenderCheckedYugiohCards(event.target.checked)
//    }

//    function handleMagicClick(event){
//     setRenderCheckedMagicCards(event.target.checked)
//    }

//    function handlePokedexClick(event){
//     setPokemonSort(event.target.checked)
//    }


    return (
        <div>

        <form className="searchbar">
            <input
            type="text"
            id="search"
            placeholder="search cards here!"
            value={searchBar}
            onChange={handleChangeSortBy}
            />
            

            {/* <label htmlFor="sort">Pokemon</label>
            <input id="sort"
            type="checkbox"
            checked={renderCheckedPokemonCards}
            onChange={handlePokemonClick}
            />
            
            <label htmlFor="sort">Magic</label>
            <input id="sort"
            type="checkbox"
            checked={renderCheckedMagicCards}
            onChange={handleMagicClick}
            />

            <label htmlFor="sort">Yu-Gi-Oh!</label>
            <input id="sort"
            type="checkbox"
            checked={renderCheckedYugiohCards}
            onChange={handleYugiohClick}
            />             */}
        </form>
        {/* <form className="pokedex">
            <label htmlFor="sort">Pokedex Number!</label>
                <input id="sort"
                type="checkbox"
                checked={pokemonSort}
                onChange={handlePokedexClick}
                />
        </form> */}

        </div>

    )
}

export default Search