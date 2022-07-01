import React, { useState } from 'react';
import Navigation from './Navigation';

function Header({
  navList,
  toggleMenu,
  currentTab,
  // contactSelected,
  // setContactSelected,
  setCurrentTab,
}) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header>
        <a href="/">
          <h1>Cade Wilson</h1>
        </a>
        <span className="toggleMenu" onClick={toggleMenu}>
          
        </span>
        <Navigation
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          navList={navList}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          // contactSelected={contactSelected}
          // setContactSelected={setContactSelected}
        />
      </header>
    </>
  );
}

export default Header;
