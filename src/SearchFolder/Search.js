import React from "react";

function Search({searchBar,setSearchBar,}){
   function handleChangeSortBy(event){
    setSearchBar(event.target.value)
   }

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

            {/* <button type="submit" className="submitButton">🔍</button> */}

        </form>
        </div>

    )
}

export default Search