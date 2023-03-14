import debounce from 'lodash/debounce';
import React from 'react';
//
import { PageContext } from '../../App';
//
import SearchImg from '../../assets/Search.svg';
import style from './Search.module.scss';
//
//
//
//
//
export const Search = ({ setSearch }) => {
  // для зміни номеру сторінки при пошуку, робитиму 1ю
  const { setCurrentPage } = React.useContext(PageContext);

  // локальне значення інпупу, без затримки
  const [localValueInput, setLocalValueInput] = React.useState('');
  // посилання на інпут
  const inputRef = React.useRef(null);

  //
  React.useEffect(() => {
    // значення що в ЛС
    const storedSearchTerm = localStorage.getItem('searchTerm');
    // якщо воно є, то записую його в строку пошуку
    if (storedSearchTerm) {
      setLocalValueInput(storedSearchTerm);
    }
  }, []);

  // очистка
  const onClickClear = () => {
    // 'глобального' з затримкою
    setSearch('');
    // локального
    setLocalValueInput('');
    //  видаляю значення з ЛС
    localStorage.removeItem('searchTerm');
    // повертаю фоткус на інпут
    inputRef.current?.focus();
  };

  // запис значення
  const onChangeValueInput = (e) => {
    // в локальний
    setLocalValueInput(e.target.value);
    // в 'глобальний' з затримкою
    delaySendValue(e.target.value);
    // в ЛС
    localStorage.setItem('searchTerm', e.target.value);
  };

  // затримкка запросу на сервер
  const delaySendValue = React.useCallback(
    debounce((value) => {
      // в 'глобальний'
      setSearch(value);
    }, 500),
    [],
  );

  return (
    <div className={style.search}>
      <img src={SearchImg} alt="Search" />
      <input
        className={style.search__input}
        placeholder="Filter by name..."
        ref={inputRef}
        value={localValueInput}
        onChange={(e) => {
          setCurrentPage(1);
          onChangeValueInput(e);
        }}
      />
      {localValueInput && (
        <>
          <span className={style.search__clean} onClick={() => onClickClear()}>
            ×
          </span>
          <span />
        </>
      )}
    </div>
  );
};
