// import './App.css';
import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import Characters from './components/Characters';
import Pagination from './components/Pagination';


function App() {
  //estado de los personajes con useState
  const [characters, setCharacters] = useState([]);//Array vacío que se llenara con los datos de la api data => setCharacters(data.result)
  const [info, setInfo] = useState({});//para los botones de next y previous.
  
  //==== hook request API personajes RICK AND MORTY=====//
  const initialurl = "https://rickandmortyapi.com/api/character";
  const fetchCharacters = (initialurl) => {
    fetch(initialurl)
      .then(response => response.json())//pasamos el json a objetos de javascript.
      .then(data => {
        setInfo(data.info);
        setCharacters(data.results);
      })
      
      .catch(error => console.log(error));
  };

  
  const onPrevious = () => {
    fetchCharacters(info.prev);    
  }
  const onNext = () => {
    fetchCharacters(info.next);    
  }
  
  useEffect(() => {
    fetchCharacters(initialurl);
  }, [])

  return (
    <>
      <Navbar brand="Rick and Morty Characters" />
      <div className="container mt-5"> 
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
        <Characters characters={characters}/>
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>

      </div>
    </>
  );
}

export default App;
