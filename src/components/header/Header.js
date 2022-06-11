import React from "react";
import "./Header.css";

let Header = (props) => {
  return (
    <div className="header">
      <h2 className="logo">Haru's Recipe</h2>
      <nav className="cuisines">
        <ul className="list">
          <li onClick={(e) => props.cuisineSelect("Indian")}>Indian</li>
          <li onClick={(e) => props.cuisineSelect("Italian")}>Spanish</li>
          <li onClick={(e) => props.cuisineSelect("American")}>American</li>
          <li onClick={(e) => props.cuisineSelect("Chinese")}>Chinese</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
