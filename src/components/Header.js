import React from "react";

function Header({ title, isDarkMode, onToggleDarkMode }) {

  function handleDarkModeClick() {
    onToggleDarkMode();
  }
   
    return (
    <header>
      <h1>
      {title}
      </h1>
      <button onClick={handleDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
    ); 
  }
  
  export default Header;