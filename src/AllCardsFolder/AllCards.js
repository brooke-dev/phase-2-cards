import React from "react";
import {NavLink} from "react-router-dom";


function AllCards(){
    return (
        <div>
            <NavLink exact to="/Pokemon" className="pokemonLink">
               <button className="pokemonBtn">Pokemon</button>
            </NavLink>
            <NavLink to="/Yugioh" className="yugiohLink">
                <button className="yugiohBtn">Yu-Gi-Oh</button>
            </NavLink>
           <NavLink to="/Magic" className="magicLink">
                <button className="magicBtn">Magic The Gathering</button>
           </NavLink>
            
        </div>
        
    )
}

export default AllCards