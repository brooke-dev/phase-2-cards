import React from "react";
import {NavLink} from "react-router-dom";


function AllCards(){
    return (
        <div>
            <NavLink exact to="/Pokemon">
               <button className="btn2">Pokemon</button>
            </NavLink>
            <NavLink to="/Yugioh">
                <button className="btn">Yu-Gi-Oh</button>
            </NavLink>
           <NavLink to="/Magic">
                <button className="btn">Magic The Gathering</button>
           </NavLink>
            
        </div>
        
    )
}

export default AllCards