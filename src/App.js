import React, { useState, useEffect } from 'react';
import './App.css';
import WebsiteHeader from './Components/WebsiteHeader';
import PokemonList from './PokemonList';
import axios from 'axios';
import Pagination from './Pagination';


function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setcurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c )
    }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
    })

    return () => {
cancel()
    }
  }, [currentPageUrl])

  function nextPage() {
    setcurrentPageUrl(nextPageUrl)
  }

  function prevPage(){
    setcurrentPageUrl(prevPageUrl)
  }

  if (loading) return "Loading..."

  
  return (
    <>
     <PokemonList pokemon={pokemon} />
     <Pagination
      nextPage={nextPageUrl ? nextPage : null}
      prevPage={prevPageUrl ? prevPage: null }
      />
   </>     
  
  );
}

export default App;
