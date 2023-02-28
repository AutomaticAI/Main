import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is AutoAI?" text="AutoAI is an new and improved version of ChatGPT. AutoAI is more advanced and receives more frequant updates to answers and much much much more. AutoAI founded in 2023 is owned and operated by the AutoAI INC, Team." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Get started in minutes.</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="We just so happen to make the next best AI. ChatGPT, too big. AutoAI is online 24/7 and hasn't crashed ever since the release!" />
      <Feature title="Knowledgebase" text="We provide a free knowledgebase with a tutorial included for users new to the AI Era. I know ChatGPT doesn't have that." />
      <Feature title="Education" text="Used by thousands in education, whether its your simple 10x10 equations or used in different subjects. We have your back along the way." />
    </div>
  </div>
);

export default WhatGPT3;
