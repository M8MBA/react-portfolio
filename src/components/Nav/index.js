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
        <a href="/" >
          <span>Cade Wilson</span> 
        </a>
      </h2>
      <nav>
        <ul className="mx-2">
          <li>
              <span>About Me</span>
          </li>
          <li>
            <span>Portfolio</span>
          </li>
          {categories.map((category) => (
            <li
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



