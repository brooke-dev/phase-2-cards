import React from "react";
import {NavLink} from "react-router-dom";

function NavBar(){
    return (
      <>
        <header className="topBar"> 
       
            <NavLink className="buttonHome" exact to="/home">
                Home
            </NavLink>
            <NavLink className="buttonAbout" to="/about">
                About
            </NavLink>     
            
        </header>
      </>
    )
}

export default NavBar