import React from 'react';
import style from './Button.module.css';

const Button = ({text}) => {

  return (
    <div className={style.wrapper}>
      <button className={style.btn}>{text}</button>
    </div>
  );
};

export default Button;
