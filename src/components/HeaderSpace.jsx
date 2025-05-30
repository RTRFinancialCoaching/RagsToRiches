import React from "react";

const HeaderSpace = ({ hrefLink, spanName }) => {
  return (
    <li>
      <a href={hrefLink}>
        <span>{spanName}</span>
      </a>
    </li>
  );
};

export default HeaderSpace;
