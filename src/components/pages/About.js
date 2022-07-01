// import React, { useState } from 'react';
import React from 'react';

function About() {
  return (
    <section className="about">
      <h1>Hi! I'm Cade. Thanks for stopping by!</h1>
      <div className="avatar">
        <img
          src={require('../../assets/images/avatar.jpg')}
          // style={{ width: '100%' }}
          alt="cade"
        />
      </div>

      <div className="bio">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus
          ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam
          maximus. Proin aliquam justo nec diam vulputate vestibulum.
        </p>
      </div>
    </section>
  );
}

export default About;
