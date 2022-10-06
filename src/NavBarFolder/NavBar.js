import React from "react";
import {NavLink} from "react-router-dom";
// import Home from "./Home";
// import Favorites from "./Favorites"
// import About from "./About"
// import NavBarCSS from "./NavBar.css"

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
            <NavLink className="buttonFav" to="/favorites">
                Favorites
            </NavLink>
      
            
        </header>
      </>
    )
}

export default NavBar