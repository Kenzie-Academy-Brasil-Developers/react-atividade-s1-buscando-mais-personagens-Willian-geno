import './App.css';
import Characters from './components/Characters/Characters';
import CharCard from './components/CharCard/CharCard';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [characterList, setCharacterList] = useState([]); 

  const [page, setpage] = useState(1)

  useEffect(() =>{
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then((response) =>response.json())
    .then((response) => setCharacterList(response.results))
  },[page]);

  const nextpage = () =>{
    setpage(page + 1);
    console.log(page)
  }

  const backPage = () =>{
    if (page > 1){
      console.log(page)
      setpage(page - 1);
    }
  }

  return (

    <div className="App">  
       <Characters characterList = {characterList}>
       </Characters>
        <div className = "divButton">
          <button onClick = {backPage}>Back</button>
          <button onClick = {nextpage}>Next</button>
        </div>
    </div>
  );
}

export default App;
