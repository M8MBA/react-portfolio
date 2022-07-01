import React from 'react';

function Portfolio() {
  const projects = [
    {
      name: 'Run Buddy',
      skills: 'HTML/CSS',
      imgSrc: 'runbuddy.png',
      description: 'Sports site for health+',
      repo: 'https://github.com/M8MBA/Run-Buddy',
      page: 'https://M8MBA.github.io/Run-Buddy/',
    },
    {
      name: 'Park Advisor',
      skills: 'HTML/CSS/JS',
      imgSrc: 'park_advisor.jpg',
      description: 'Travel site for trip advice',
      repo: 'https://github.com/M8MBA/Park-Advisor',
      page: 'https://noahslusher.github.io/NP-trip-planner/',
    },


  ];

  return (
    <section className="portfolio">
      <h1>Portfolio</h1>
      {projects.map(project => (
        <div key={project.name} className="project">
          <div className="photo">
            <div className="mask"></div>
            <img
              className="feature"
              src={require(`../../assets/images/project_feature/${project.imgSrc}`)}
              alt={project.name}
            />
          </div>

        </div>
      ))}
    </section>
  );
}

export default Portfolio;