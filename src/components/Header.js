import React from "react";
import { NavLink } from "react-router-dom";

function Header({ title, isDarkMode, onToggleDarkMode }) {

  function handleDarkModeClick() {
    onToggleDarkMode();
  }
   
    return (
    <header>
      <h1 className="title">
      + {title}
      </h1>
      <nav>
        <NavLink className="button" to="/resource-list">
          See Resources 
        </NavLink>
        <NavLink className="button" to="/resource-form">
          Add Resource
        </NavLink>
      <button onClick={handleDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
      </nav>
    </header>
    ); 
  }
  
  export default Header;