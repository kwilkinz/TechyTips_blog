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
        Everything for Junior Developers <br />
        From How To's, Live Demos, and our Top Favorites!
      </p>
    </header>
  );
};

export default Header;
