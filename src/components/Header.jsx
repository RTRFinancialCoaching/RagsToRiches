import React, { useEffect, useState } from "react";
import HeaderSpace from "./HeaderSpace";

const Header = ({ pageNum = 0 }) => {
  useEffect(() => {
    const headerSpaces = document.getElementById("HeaderSpaces");
    const page = headerSpaces.children.item(pageNum);
    page.classList.add("page-selected");
    window.addEventListener("scroll", onScrollFunc);
  }, []);

  const onScrollFunc = (event) => {
    const offset = window.pageYOffset;
    if (offset >= 200) {
    }
  };

  return (
    <div className={"header-div header-sticky"}>
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
          <HeaderSpace
            hrefLink="/Working-Together"
            spanName="WORKING TOGETHER"
          />
          <HeaderSpace
            hrefLink="/Contact"
            spanName="CONTACT"
            className="header-contact"
          />
        </ul>
      </div>
    </div>
  );
};

export default Header;
