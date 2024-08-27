import React from 'react';
import style from './main.module.css';

const Addwidget = ({ onClick }) => {
  return (
    <div className={style.buttonContainer}>
      <button onClick={onClick}> + Add widget</button>
    </div>
  );
};

export default Addwidget;
