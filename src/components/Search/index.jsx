import React from 'react'
//
import SearchImg from '../../assets/Search.svg'
import style from './Search.module.scss'
//
//
//
export const Search = () => {

	return (
		<div className={style.search}>
			<img src={SearchImg} alt="Search" />
			<input
				className={style.search__input}
				placeholder="Filter by name..."
			/>
			<>
				<span className={style.search__clean}>
					×
				</span>
			</>
		</div>
	)
}
