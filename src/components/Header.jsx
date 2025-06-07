import React, { useEffect, useState } from "react";
import HeaderSpace from "./HeaderSpace";

const Header = ({ pageNum = 0 }) => {
  useEffect(() => {
    const headerSpaces = document.getElementById("HeaderSpaces");
    const page = headerSpaces.children.item(pageNum);
    page.classList.add("page-selected");
  }, []);

  return (
    <div className="header-div">
      <div className="title">
        <div className="logo-img">
          <a href="/"></a>
        </div>
      </div>
      <div className="nav-container">
        <ul id="HeaderSpaces">
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
