import React, { useState } from "react";

const ServiceLink = (props) => {
  const [collapse, setCollapse] = useState(false);

  const linkFunc = () => {
    setCollapse(!collapse);
  };

  return (
    <li
      className={collapse ? "services-link" : "services-link collapse"}
      onClick={linkFunc}
      id={props.id}
    >
      <div className="services-link-left">
        <div className="services-link-cir">
          <img src={props.imgSrc} />
        </div>
      </div>
      <div className="services-link-right">
        <h2 id="services-link-h2">{props.h2}</h2>
        <div
          id={props.id + "-content"}
          className={
            collapse
              ? "services-link-content"
              : "services-link-content content-collapse"
          }
        >
          {props.children}
        </div>
      </div>
    </li>
  );
};

export default ServiceLink;
