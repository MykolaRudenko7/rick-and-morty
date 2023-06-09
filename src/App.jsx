import axios from 'axios';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login, NotFound } from './components';
//
import { CharacterDetails, MainPage } from './pages/index';
//
// в провайдері: стейт вбраної сторінки і загальна к-сть стр.
export const PageContext = React.createContext();
//
//
//
//
//
function App() {
  // дані персонажів і номер стр
  const [data, setData] = React.useState([]);
  // в інфо => к-сть сторінок всього
  const [info, setInfo] = React.useState();
  // чи завантажилась стр.
  const [ifLoading, setIfLoading] = React.useState(false);
  // номер сторінки
  const [currentPage, setCurrentPage] = React.useState(1);
  // значення інпуту 'глобальне'
  const [search, setSearch] = React.useState('');
  // чи зареєстрований
  const [isAuth, setIsAuth] = React.useState(localStorage.getItem('isAuth'));
  //
  let API = `https://rickandmortyapi.com/api/character?page=${currentPage}&name=${search}`;

  // запит і відслідковування
  React.useEffect(() => {
    axios
      .get(API)
      .then((response) => {
        // сортування
        const sortedCharacters = response.data.results.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        // песонажі і стр.
        setData(sortedCharacters);
        setInfo(response.data.info);
        setIfLoading(true);
      })
      .catch((error) => {
        setIfLoading(false);
        console.log(error);
      });
  }, [API]);

  // при кожному введенні тексту у поле вводу оновлюю стан searchTerm.
  // наступний рядок фільтрує список персонажів за співпадінням з searchTerm.
  // передаю пропсом для рендеру
  const filteredCharacters = data.filter((character) => {
    return character.name.toLowerCase().includes(search.toLowerCase());
  });

  if (!isAuth) {
    return <Login setIsAuth={setIsAuth} />;
  }
  return (
    <div className="app">
      <PageContext.Provider value={{ currentPage, setCurrentPage, info }}>
        <Routes>
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route
            path="/"
            element={
              <MainPage
                characters={filteredCharacters}
                setSearch={setSearch}
                ifLoading={ifLoading}
                setIsAuth={setIsAuth}
              />
            }
          />
          <Route path="/characters/:id" results={data} element={<CharacterDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageContext.Provider>
    </div>
  );
}

export default App;
