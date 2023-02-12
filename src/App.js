import React, { useState, useEffect } from 'react';
import './App.css';
import WebsiteHeader from './Components/WebsiteHeader';
import PokemonList from './Components/PokemonList';
import PokemonPage from './Components/PokemonPage';
import axios from 'axios';
import Pagination from './Components/Pagination';


function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setcurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)
  const [pokeDex, setPokeDex] = useState()

const setUpPokemon=async()=>{
  setLoading(true)
  const res = await axios.get(currentPageUrl);
    setLoading(false);
    setNextPageUrl(res.data.next);
    setPrevPageUrl(res.data.previous)
    getPokemon(res.data.results);
}

const getPokemon=async(res)=>{
res.map(async(item)=>{
const result = await axios.get(item.url)
setPokemon(state=>{
  state=[...state, result.data]
   state.sort((a,b)=> a.id>b.id?1:-1)
  return state
})
})
}

  useEffect(() => {
   setUpPokemon()
}, [currentPageUrl]);
   

  function nextPage() {
    setcurrentPageUrl(nextPageUrl)
  }

  function prevPage(){
    setcurrentPageUrl(prevPageUrl)
  }

console.log(setPokemon)
  
  return (
    <>
    <div>
     <PokemonList pokemon={pokemon} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>
     <Pagination
      nextPage={nextPageUrl ? nextPage : null}
      prevPage={prevPageUrl ? prevPage: null }
      />
      </div>
      <div>
        <PokemonPage data={pokeDex} />
      </div>
   </>     
  
  );
}

export default App;
