import React, { useState } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function categorySelected() {
  console.log("hello")
}

function Nav() {
const [categories] = useState([
  { name: "Contact Me", description: "Let's chat!" },
  { name: "Resume", description: "Previous Work" },

]);
const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <header className="flex-row px-1" >
      <h2>
        <a data-testid="link" href="/" >
          <span>Cade Wilson</span> 
        </a>  
      </h2>
      <nav>
        <ul className="mx-2">
          <li>
            <span href="#about">About Me</span>
          </li>
          <li>
            <span>Portfolio</span>
          </li>
          {categories.map((category) => (
            <li className={`mx-1 ${
                currentCategory.name === category.name && 'navActive'
                }`} key={category.name}>
              <span
                onClick={() => {
                  setCurrentCategory(category)
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;



