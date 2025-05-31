import React from "react";
import HeaderSpace from "./HeaderSpace";

const Header = () => {
  return (
    <div className="header-div">
      <div className="title">
        <div className="logo-img">
          <a href="/"></a>
        </div>
      </div>
      <div className="nav-container">
        <ul>
          <HeaderSpace hrefLink="/" spanName="Home" />
          <HeaderSpace hrefLink="/About" spanName="About" />
          <HeaderSpace hrefLink="/Services" spanName="Services" />
          <HeaderSpace hrefLink="/Blog" spanName="Blog" />
          <HeaderSpace hrefLink="/Contact" spanName="Contact" />
        </ul>
      </div>
    </div>
  );
};

export default Header;
