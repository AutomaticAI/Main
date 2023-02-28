import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Get started in minutes.</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Wrong information? As long as you have the tab open, you can tell it the correct information and it will register that information for the continous session!</p>
      <h4>Get started in minutes.</h4>
    </div>
  </div>
);

export default Possibility;
