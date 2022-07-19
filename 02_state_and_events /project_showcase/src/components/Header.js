import React, { useState } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleIsDarkMode = (e) => {
    setIsDarkMode(isDarkMode => !isDarkMode)
  }

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={toggleIsDarkMode}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
    </header>
  );
}

export default Header;
