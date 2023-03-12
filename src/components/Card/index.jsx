import React from 'react'
//
import style from './Card.module.scss'
//
//
//
export const Card = ({ image, name, species }) => {
	return (
		<li className={style.card}>
			<div className={style.card__image}>
				<img src={image} alt="Character Image" />
			</div>
			<a className={style.card__content} href='#'>
				<h2 className={style.card__title}>{name}</h2>
				<p className={style.card__text}>{species}</p>
			</a>
		</li>
	)
}
