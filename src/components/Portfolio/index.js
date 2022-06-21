import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/portfolio/NP-planner.png";
import photo2 from "../../assets/portfolio/password-gen.png";
import photo3 from "../../assets/portfolio/runbuddy.png";
import photo4 from "../../assets/portfolio/weather-dashboard.png";


function Portfolio(props) {
  const currentCategory = {
    name: "Portfolio",
    description: "Photos and links of projects",
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <div className="flex-row">
        <img
          src={photo}
          alt="Project #1"
          className="img-thumbnail mx-1"
        /> 
        <img
          src={photo2}
          alt="Project #2"
          className="img-thumbnail mx-1"
        />
        <img
          src={photo3}
          alt="Project #3"
          className="img-thumbnail mx-1"
        />
        <img
          src={photo4}
          alt="Project #4"
          className="img-thumbnail mx-1"
        /> 
      </div>
    </section>
  );
}
export default Portfolio;