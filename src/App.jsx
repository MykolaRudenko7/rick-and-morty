import axios from 'axios';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CharacterDetails, MainPage } from './pages/index';
//
//
//
function App() {
  const [ifLoading, setIfLoading] = React.useState(true);
  // номер стр
  const [pageNumber, setPageNumber] = React.useState(1)
  // дані
  const [data, setData] = React.useState([]);
  const { info, results } = data;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`

  // ф-ція отримання даних
  const fetchData = async () => {
    try {
      await axios.get(api).then((res) => {
        setData(res.data)
        setIfLoading(true);
      });
    } catch (error) {
      setIfLoading(false);
      console.log('Error!');
    }
  };

  // першиq рендер і відслідковування
  React.useEffect(() => {
    fetchData()
  }, [api])



  console.log(data);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage results={results} />} />
        <Route path="/:id" element={<CharacterDetails/>} />
      </Routes>
    </div>
  )
}

export default App
