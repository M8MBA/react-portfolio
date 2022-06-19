import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Resume from './components/Resume';



function App() {
  const categories = [
    {
      name: 'portfolio',
      description: 'a showcase of my projects'
    },
    {
      name: 'contactme',
      description: 'input boxes to allow anyone to contact me via email'
    },
    {
      name: 'resume',
      description: 'a downloadable link to my resume and coding abilities'
    },
  ];

  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
