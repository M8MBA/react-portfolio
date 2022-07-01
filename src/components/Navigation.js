import React, { useEffect } from 'react';

function Navigation({
  navList,
  isMenuOpen,
  toggleMenu,
  currentTab,
  // contactSelected,
  // setContactSelected,
  setCurrentTab,
}) {

  useEffect(() => {
    document.title = currentTab;
  }, [currentTab]);

  return (
    <nav className={isMenuOpen ? 'menu-active' : undefined}>
      <ul>
        {navList.map(item => (
          <li
            className={currentTab === item ? 'currentTab' : undefined}
            onClick={() => {
              toggleMenu(!isMenuOpen);
              setCurrentTab(item);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
