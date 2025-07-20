import React, { useEffect, useState } from "react";
import HeaderSpace from "./HeaderSpace";

const Header = ({ pageNum = 0 }) => {
  useEffect(() => {
    const headerSpaces = document.getElementById("HeaderSpaces");
    const page = headerSpaces.children.item(pageNum);
    page.classList.add("page-selected");
  }, []);

  const [headerScrolled, setHeaderScrolled] = useState("");

  const onScrollFunc = (event) => {
    const scrollPosition = window.scrollY;
    console.log(scrollPosition);
    if (scrollPosition > 200) {
      setHeaderScrolled(" header-scrolled");
    } else {
      setHeaderScrolled("");
    }
  };

  return (
    <div className={"header-div" + headerScrolled} onScroll={onScrollFunc}>
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
