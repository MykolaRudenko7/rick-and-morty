import { signOut } from 'firebase/auth';
import React from 'react';
//
import { auth } from '../../components/firebase';
import { Card, Pagination, Search, Skeleton } from '../../components/index';
//
import { useNavigate } from 'react-router-dom';
import LogoImg from '../../assets/Logo.png';
import style from './MainPage.module.scss';
//
//
//
//
//
export const MainPage = ({ setIsAuth, characters, setSearch, ifLoading }) => {
  // скелетони
  const skeletons = [...new Array(20)].map((_, index) => <Skeleton key={index} />);
  // навігація
  let navigate = useNavigate();

  // вихід з акаунту
  const signUserOut = () => {
    // firebase
    signOut(auth).then(() => {
      // чищу ЛС
      localStorage.clear();
      // чищу стейт
      setIsAuth(false);
      // переправляю
      navigate('/login');
    });
  };

  // вихід з акаунту
  const signUserOut = () => {
    // firebase
    signOut(auth).then(() => {
      // чищу ЛС
      localStorage.clear();
      // чищу стейт
      setIsAuth(false);
      // переправляю
      window.location.pathname = '/login';
    });
  };

  return (
    // шапка
    <div className={style.mainPage}>
      <button type="button" className={style.mainPage__btnOut} onClick={() => signUserOut()}>
        Sign Out
      </button>
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
