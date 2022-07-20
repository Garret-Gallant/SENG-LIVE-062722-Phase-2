import React from "react";

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={toggleDarkMode}>{buttonTextContent}</button>
    </header>
  );
};

export default Header;
