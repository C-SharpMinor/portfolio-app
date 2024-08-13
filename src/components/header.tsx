import React, { useState } from "react";
import "./header.css";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  window.onscroll = () => {
    setScrolled(window.pageYOffset === 0 ? false : true);
  };
  return (
    <div className={scrolled ? "headerScrolled" : "header"}>
      <div className="left">
        <h1>My Portfolio App</h1>
      </div>
      <div className="right">
        <ul id="links">
          <li id="list_item">About Me</li>
          <li id="list_item">My Projects</li>
          <li id="list_item">Let's Talk</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
