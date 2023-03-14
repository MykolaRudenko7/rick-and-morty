import React from 'react';
//
import { Card, Pagination, Search, Skeleton } from '../../components/index';
//
import LogoImg from '../../assets/Logo.png';
import style from './MainPage.module.scss';
//
//
//
//
//
export const MainPage = ({ characters, setSearch, ifLoading }) => {
  // скелетони
  const skeletons = [...new Array(20)].map((_, index) => <Skeleton key={index} />);

  return (
    // шапка
    <div className={style.mainPage}>
      <div className={style.mainPage__logo}>
        <img src={LogoImg} alt="Logo" />
      </div>
      {/* пошук */}
      <Search setSearch={setSearch} />
      {/* карточки */}
      <ul className={style.mainPage__cards}>
        {ifLoading
          ? characters.map((character) => <Card key={character.id} character={character} />)
          : skeletons}
      </ul>
      {/* пагінація */}
      <Pagination />
    </div>
  );
};
