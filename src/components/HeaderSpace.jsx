import React from "react";

const HeaderSpace = ({ hrefLink, spanName }) => {
  return (
    <li className="header-space">
      <span className="header-space-top"></span>
      <a href={hrefLink}>
        <span>{spanName}</span>
      </a>
      <span className="header-space-bottom"></span>
      <span className="header-space-back"></span>
    </li>
  );
};

export default HeaderSpace;
