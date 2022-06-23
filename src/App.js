import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
// import Resume from './components/Resume';
import Portfolio from './components/Portfolio';



function App() {
  const [categories] = useState([
    // {
    //   name: 'About Me',
    //   description: 'a downloadable link to my resume and coding abilities'
    // },
    // {
    //   name: 'portfolio',
    //   description: 'a showcase of my projects'
    // },
    {
      name: 'contact Me',
      description: 'input boxes to allow anyone to contact me via email'
    },
    {
      name: 'resume',
      description: 'a downloadable link to my resume and coding abilities'
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          <Portfolio></Portfolio>
          <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;
