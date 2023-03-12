import React from 'react'
//
import style from './Card.module.scss'
import RickImg from '../../assets/Rick.jpg'
//
//
//
export const Card = () => {
  return (
	 <li className={style.card}>

		<div className={style.card__image}>
			<img src={RickImg} alt="Character Image" />
		</div>

		<a className={style.card__content} href='#'>
			  <h2 className={style.card__title}>Rick Sanchez</h2>
			  <p className={style.card__text}>Human</p>
		</a>

	 </li>
  )
}
