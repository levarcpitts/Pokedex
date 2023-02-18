import React, { useState, useEffect } from 'react';
import './App.css';
import PokemonList from './Components/PokemonList';
import PokemonPage from './Components/PokemonPage';
import axios from 'axios';
import './styles/style.css'
import arrow from './images/pagearrow.png'


function App() {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPageUrl, setcurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [pokeDex, setPokeDex] = useState()
  const [show, setShow] = useState(false)
  

const setUpPokemon=async()=>{
  setLoading(true)
  const res = await axios.get(currentPageUrl);
    setNextPageUrl(res.data.next);
    setPrevPageUrl(res.data.previous)
    getPokemon(res.data.results);
    setLoading(false);
}

const getPokemon=async(res)=>{
  res.map(async(item)=>{
     const result=await axios.get(item.url)
     setPokemon(state=>{
         state=[...state,result.data]
         state.sort((a,b)=>a.id>b.id?1:-1)
         return state;
     })
  })   
}

  useEffect(() => {
   setUpPokemon()
}, [currentPageUrl]);
  
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  return (
    <>
    <div className='container'>
      <div className='btn-left'>
    {  prevPageUrl && <button onClick={()=>{
     setPokemon([])
     setcurrentPageUrl(prevPageUrl) 
 }}><img src={arrow} id='page_button' className='prev_button' /></button>}
     </div>
      <div className='left-content' onClick={handleShow} > 
     <PokemonList pokemon={pokemon} loading={loading} infoPokemon={poke=>setPokeDex(poke)} />
     </div>
     <div className="btn-right">
                        { nextPageUrl && <button onClick={()=>{
                            setPokemon([])
                            setcurrentPageUrl(nextPageUrl)
                        }}><img src={arrow} id='page_button' className='next_button' /></button>}

                    </div>
            
       
        <PokemonPage data={pokeDex} show={show} handleClose={handleClose} />
        
      </div>
   </>     
  
  );
}

export default App;


