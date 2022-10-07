import React from "react";

function YugiohSort({yugiohSort, setYugiohSort}){

    function handleCardTypeClick(event){
        setYugiohSort(event.target.checked)
       }

    return (   
        <form className="sort">
        <label htmlFor="sort">Card Type</label>
            <input id="sort"
            type="checkbox"
            checked={yugiohSort}
            onChange={handleCardTypeClick}
            />
        </form>

    )
}

export default YugiohSort