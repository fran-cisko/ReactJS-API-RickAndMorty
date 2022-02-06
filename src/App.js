// import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Characters from './components/Characters';


function App() {
  //estado de los personajes con useState
  const [characters, setCharacters] = useState([]);//Array vacío que se llenara con los datos de la api data => setCharacters(data.result)

  //==== hook request API personajes RICK AND MORTY=====//
  const initialurl = "https://rickandmortyapi.com/api/character";
  const fetchCharacters = (initialurl) => {
    fetch(initialurl)
      .then(response => response.json())//pasamos el json a objetos de javascript.
      .then(data => setCharacters(data.result))
      .catch(error => console.log(error))
  };
  useEffect(() => {
    fetchCharacters(initialurl);
  }, [])


  return (
    <>
      <Navbar brand="Rick and Morty App" />
      <div className="container"> 
        <Characters characters={characters}/>
      </div>
    </>
  );
}

export default App;
