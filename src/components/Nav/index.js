import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;

  const handleClick = (item) => {
    console.log(item);
    return item;
  };

  return (
    <header className="flex-row px-1" >
      <h2>
        <a data-testid="link" href="/" >
          <span></span>Cade Wilson
        </a>
      </h2>
      <nav>
        <ul className="mx-2">
          <li>
            <a data-testid="about" href="#about">
              About me
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick('Portfolio')}>
              Portfolio
            </span>
          </li>

          {categories.map((category) => (
            <li className={`mx-1 ${currentCategory.name === category.name && 'navActive'
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



