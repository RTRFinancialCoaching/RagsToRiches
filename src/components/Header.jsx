import React from "react";
import HeaderSpace from "./HeaderSpace";

const Header = () => {
  return (
    <div className="header-div">
      <div className="title">
        <p className="logo-img">
          <a href="/"></a>
        </p>
      </div>
      <div className="nav-container">
        <ul>
          <HeaderSpace hrefLink="/" spanName="Home" />
        </ul>
      </div>
    </div>
  );
};

export default Header;
