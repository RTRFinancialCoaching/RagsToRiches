import React from "react";

const HeaderSpace = ({ hrefLink, spanName }) => {
  return (
    <li className="header-space">
      <a href={hrefLink}>
        <span>{spanName}</span>
      </a>
    </li>
  );
};

export default HeaderSpace;
