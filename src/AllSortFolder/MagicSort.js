import React from "react";

function MagicSort({magicSort, setMagicSort}){

    
    function handleExpansionClick(event){
        setMagicSort(event.target.checked)
       }


    return (
        <form className="sort">
        <label htmlFor="sort">Expansion Symbol!</label>
            <input id="sort"
            type="checkbox"
            checked={magicSort}
            onChange={handleExpansionClick}
            />
        </form>


    )
}

export default MagicSort