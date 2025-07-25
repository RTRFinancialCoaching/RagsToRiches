import React from "react";

const HeaderSpace = ({ hrefLink, spanName, spanName2, className = "" }) => {
  return (
    <li className={"header-space" + " " + className}>
      <span className="header-space-top"></span>
      <a href={hrefLink}>
        <span>
          {spanName}
          <br />
          {spanName2}
        </span>
      </a>
      <span className="header-space-bottom"></span>
      <span className="header-space-back"></span>
    </li>
  );
};

export default HeaderSpace;
