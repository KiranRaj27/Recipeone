import React, { useEffect, useState } from "react";
import CuisineCard from "./CuisineCard";
import "./CuisineCards.css";

let API_KEY = "be7c622f69c04b2081d9fadbf795d70a";

const CuisineWrapper = (props) => {
  const data = props.selectedCuisine;
  console.log(data);

  const [cuisines, setCuisines] = useState([]);

  useEffect(() => {
    if (props.selectedCuisine) {
      fetchCuisine();
    }
  }, [data]);

  async function fetchCuisine() {
    let response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${props.selectedCuisine}&addRecipeInformation=true&number=8`
    );
    var cuisineData = await response.json();
    setCuisines(cuisineData.results);
    console.log(cuisineData);
  }

  return (
    <div className="cuisineTile">
      {cuisines.map((i) => (
        <CuisineCard key={i.id} cuisineArray={i} />
      ))}
    </div>
  );
};

export default CuisineWrapper;
