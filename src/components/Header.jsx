import React, { useEffect, useState } from "react";
import HeaderSpace from "./HeaderSpace";
import "../CSS/Mobile/HeaderMobile.css";

const Header = ({ pageNum = 0, sticky = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [nameClass, setNameClass] = useState("header-div");

  useEffect(() => {
    selectedFunc();
    if (sticky) {
      window.addEventListener("scroll", setScrollFunc);
    }

    setNameClass(
      sticky
        ? scrolled
          ? "header-div header-sticky"
          : "header-none"
        : "header-div"
    );
  }, []);

  useEffect(() => {
    if (scrollY >= 50) {
      setScrolled(true);
      setNameClass("header-div header-sticky");
      selectedFunc();
    } else if (scrolled) {
      setNameClass(
        sticky
          ? scrolled
            ? "header-div header-sticky header-out"
            : "header-div header-sticky"
          : "header-div"
      );
      setScrolled(false);
    }
  }, [scrollY]);

  const selectedFunc = () => {
    const headerSpaces = document.getElementById("HeaderSpaces" + sticky);
    const page = headerSpaces.children.item(pageNum);
    console.log(page);
    page.classList.add("page-selected");
  };

  const setScrollFunc = () => {
    setScrollY(window.scrollY);
  };

  const onFadeOut = (event) => {
    const eName = event.animationName;
    if (eName === "slideOut") {
      setNameClass("header-none");
    }
  };

  return (
    <div className={nameClass} onAnimationEnd={onFadeOut}>
      <div className="title">
        <div className="logo-img">
          <a href="/"></a>
        </div>
      </div>
      <div className="nav-container">
        <ul id={"HeaderSpaces" + sticky}>
          <HeaderSpace hrefLink="/" spanName="HOME" />
          <HeaderSpace hrefLink="/Services" spanName="SERVICES" />
          <HeaderSpace
            hrefLink="/Working-Together"
            spanName="WORKING"
            spanName2="TOGETHER"
          />
          <HeaderSpace hrefLink="/About" spanName="ABOUT" />
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
