import React from "react";
import { Time, Group } from "../../assets";

function CuisineCard(props) {
  return (
    <div className="cuisineCard">
      <img
        src={props.cuisineArray.image}
        className="cuisineImage"
        alt="cuisineimage"
      ></img>
      <h4 className="cuisineTitle">{props.cuisineArray.title}</h4>
      <div className="cuisineInfo">
        <Time />
        <span>{props.cuisineArray.readyInMinutes}</span>
        <Group />
        <span>{props.cuisineArray.servings}</span>
      </div>
    </div>
  );
}

export default CuisineCard;
