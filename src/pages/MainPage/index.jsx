import React from 'react';
import LogoImg from '../../assets/Logo.png';
import { Card, Pagination, Search, Skeleton } from '../../components/index';
import style from './MainPage.module.scss';

export const MainPage = ({ results }) => {

	const skeletons = [...new Array(20)].map((_, index) => <Skeleton key={index} />);

	return (
		<div className={style.mainPage}>
			<div className={style.mainPage__logo}>
				<img src={LogoImg} alt="Logo" />
			</div>
			<Search />
			<ul className={style.mainPage__cards}>
				{results ? (
					results.map((obj) => <Card key={obj.id} {...obj} />)
				) : (
					skeletons
				)}
			</ul>
			{/* <Pagination /> */}
		</div>
	);
};
