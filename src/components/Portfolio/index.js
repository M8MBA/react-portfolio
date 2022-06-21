import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/portfolio/NP-planner.png";

function Portfolio(props) {
  const currentCategory = {
    name: "Portfolio",
    description: "Photos and links of projects",
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      <div className="flex-row">
        <img
          src={photo}
          alt="Project #1"
          className="img-thumbnail mx-1"
        />  
      </div>
    </section>
  );
}
export default Portfolio;