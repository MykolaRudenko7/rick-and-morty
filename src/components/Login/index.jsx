import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
//
import { auth, provider } from '../firebase';
//
import style from './Login.module.scss';
//
//
//
//
//
//
export const Login = ({ setIsAuth }) => {
  let navigate = useNavigate();

  // при реєстраці
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // в стор запис що все добре
        localStorage.setItem('isAuth', true);
        // в стейт що успішно
        setIsAuth(true);
        // перекидаю на головну
        navigate('/');
      })
      .catch((e) => console.error(error));
  };

  return (
    <div className={style.login}>
      <button type="button" className={style.login__btn} onClick={() => signInWithGoogle()}>
        Sign in with Google
      </button>
    </div>
  );
};
