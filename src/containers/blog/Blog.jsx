import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Feb 27, 2023" text="Is AI taking over the world and regular jobs? What impact does it have on Teachers? Let us explore this topic." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Feb 22, 2023" text="Meaning of AI, what is the purpose behind it? Let us explore this topic." />
        <Article imgUrl={blog03} date="Feb 16, 2023" text="The release of AutoAI. The better and more secure version of ChatGPT. Let us explore this topic." />
        <Article imgUrl={blog04} date="Feb 1, 2023" text="GPTZero, is it good or bad. Is finding text by AI and the detector giving invalid answers good for us? Let us explore this topic." />
        <Article imgUrl={blog05} date="Jan 9, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);

export default Blog;
