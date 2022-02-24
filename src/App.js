import React, { useState } from "react";
import CuisineWrapper from "./components/cuisineCards/CuisineWrapper";
import Header from "./components/header/Header";

function App() {
  const [cuisine, setCuisine] = useState(null);

  const cuisineSelected = (cuisine) => {
    setCuisine(cuisine);
  };
  return (
    <>
      <Header cuisineSelect={cuisineSelected} />
      <CuisineWrapper selectedCuisine={cuisine} />
    </>
  );
}

export default App;
