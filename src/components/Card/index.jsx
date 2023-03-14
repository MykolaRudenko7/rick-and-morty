import React from 'react';
import { Link } from 'react-router-dom';
//
import style from './Card.module.scss';
//
//
//
//
//
export const Card = ({ character }) => {
  // витягую дані з об'єкта
  const { id, image, name, species } = character;

  return (
    // при клікові перехожу на сторінку персонажа по його ID
    <Link to={`/characters/${id}`}>
      <li className={style.card}>
        <div className={style.card__image}>
          <img loading="lazy" src={image} alt={name} />
        </div>
        <div className={style.card__content}>
          <h2 className={style.card__title}>{name}</h2>
          <p className={style.card__text}>{species}</p>
        </div>
      </li>
    </Link>
  );
};
