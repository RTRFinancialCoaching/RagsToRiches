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
          <HeaderSpace hrefLink="/" spanName="HOME" />
          <HeaderSpace hrefLink="/About" spanName="ABOUT" />
          <HeaderSpace hrefLink="/Services" spanName="SERVICES" />
          <HeaderSpace hrefLink="/Blog" spanName="BLOG" />
          <HeaderSpace hrefLink="/Contact" spanName="CONTACT" />
        </ul>
      </div>
    </div>
  );
};

export default Header;
