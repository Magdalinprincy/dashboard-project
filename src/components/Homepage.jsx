import React from 'react';
import style from './nav.module.css';

const Homepage = () => {
  return (
    <div id={style.nav}>
      <article>
        <div className={style.home}>
          Home{' '}
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 7L15 12L10 17"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <a href=""> Dashboard</a>
        </div>
      </article>
    </div>
  );
};

export default Homepage;
