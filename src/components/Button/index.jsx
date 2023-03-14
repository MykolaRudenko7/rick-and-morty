import React from 'react';
import { Link } from 'react-router-dom';
//
import style from './Button.module.scss';
//
//
//
//
//
export const Button = () => {
  return (
    <Link to="/">
      <button className={style.button}>GO BACK</button>
    </Link>
  );
};
