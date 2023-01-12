import React from "react";
import "./Header.css";
import TypeText from "./TypeText";
import Topbar from "../TopBar/Topbar";

const Header = () => {
  return (
    <header className="home-header">
      <TypeText />
      <Topbar />
      <p>
        Get your amazing techy tips here! <br />
        From finances, favorite color themes, and more!
      </p>
    </header>
  );
};

export default Header;
