import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Citing Sources like no other.',
    text: 'Ever wanted sources we used? Just ask "cite your sources" in corespond to your generated essay. You can ask it to do in-text citations aswell!',
  },
  {
    title: 'Writing your work for you!',
    text: 'Ever have the feeling of being lazy? Take an essay and put it through our paraphrasing tool to make your whatever needs perfect as a human would write!',
  },
  {
    title: 'Nothing is impossible.',
    text: 'Noting is impossible, find millions of answers in seconds. Asking for a recipe works aswell!',
  },
  {
    title: 'Thousands of trusted users.',
    text: 'Thousands.. upon thousands use AutoAI daily, join the "thousands" and experience an whole new world of AI writing!',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Use AutoAI today.</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
