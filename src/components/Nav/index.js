import React from 'react';

const categories = [
  { name: "Contact Me", description: "Let's chat!" },
  { name: "Resume", description: "Previous Work" },
];

function categorySelected() {
  console.log("hello")
}

function Nav() {

  return (
    <header data-testid="header" className="flex-row px-1" >
      <h2>
        <a href="/">
          <span role="img" aria-label="camera"> </span> Cade 🤑 Wilson
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">
              About me
            </a>
          </li>
          <li>
            <span>Portfolio</span>
          </li>
          {categories.map((category) => (
            <li
              className="mx-1"
              key={category.name}
            >
              <span onClick={() => categorySelected(category.name)} >
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;



