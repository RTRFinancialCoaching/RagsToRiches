import React from "react";

const GridBox = ({ icon, h3, p, classVar }) => {
  return (
    <div className={classVar + " app-white-space"}>
      <div className="app-white-circle">
        <img src={icon} />
      </div>
      <h3>{h3}</h3>
      <p>{p}</p>
    </div>
  );
};

export default GridBox;
