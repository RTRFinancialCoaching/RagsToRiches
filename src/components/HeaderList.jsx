import { useState } from "react";

const HeaderList = () => {
  const [drop, setDrop] = useState(false);

  const headerClick = () => {
    if (!drop) {
      setDrop(true);
      document.body.style.overflow = "hidden";
    }
  };
  const headerClose = () => {
    setDrop(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="header-list" onClick={headerClick}>
      <div className="header-list-back"></div>
      <ul className={drop ? "header-list-ul" : "header-drop header-list-ul"}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Services">Services</a>
        </li>
        <li>
          <a href="/Working-Together">Working Together</a>
        </li>
        <li>
          <a href="/About">About</a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
        <img
          src="/icons/cross.svg"
          className="header-cross"
          onClick={headerClose}
        />
      </ul>
    </div>
  );
};

export default HeaderList;
