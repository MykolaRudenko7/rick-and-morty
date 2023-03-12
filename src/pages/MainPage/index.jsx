import React from 'react'
import LogoImg from '../../assets/Logo.png'
import { Card, Search } from '../../components/index'
import style from './MainPage.module.scss'


export const MainPage = () => {
	return (
		<div className={style.mainPage}>

			<div className={style.mainPage__logo}>
				<img src={LogoImg} alt="Logo" />
			</div>

			<Search />

			<ul className={style.mainPage__cards}>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</ul>
			
		</div>
	)
}

