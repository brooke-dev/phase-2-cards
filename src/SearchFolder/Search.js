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
            {/* <button type="submit" className="submitButton">🔍</button> */}
        </form>
        </div>

    )
}

export default Search