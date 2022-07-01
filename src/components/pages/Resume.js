import React from 'react';

function Resume() {
  const frontEnd = [
    'HTML',
    'CSS',
    'Javascript',
    'responsive design',
    'React',
    'Bootstrap',
  ];
  const backEnd = [
    'APIs',
    'Node',
    'Express',
    'MySQL, Sequelize',
    'MongoDB, Mongoose',
    'REST',
  ];
  return (
    <section className="resume">
      <h1>Resume</h1>
      <p>
        Download my <a href="/">resume</a>
      </p>
      <div className="front-end-stack">
        <h3>Font-end Proficiencies</h3>
        <ul>
          {frontEnd.map(item => (
            <li key={item}> {item}</li>
          ))}
        </ul>
      </div>
      <div className="back-end-stack">
        <h3>Back-end Proficiencies</h3>
        <ul>
          {backEnd.map(item => (
            <li key={item}> {item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Resume;
