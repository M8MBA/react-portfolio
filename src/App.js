import React, { useState } from 'react';
import {
  Header,
  About,
  Footer,
  Portfolio,
  Contact,
  Resume,
} from './components';

function App() {
  const navList = ['About me', 'Portfolio', 'Contact', 'Resume'];
  const [currentTab, setCurrentTab] = useState('About me');

  return (
    <div>
      <Header
        navList={navList}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      {currentTab === 'About me' && <About />}
      {currentTab === 'Portfolio' && <Portfolio />}
      {currentTab === 'Contact' && <Contact />}
      {currentTab === 'Resume' && <Resume />}
      <Footer />
    </div>
  );
}

export default App;
