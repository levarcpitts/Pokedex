import React from 'react'
import axios from 'axios'
import Charmander from '../images/charmander.png'
import styled from 'styled-components'
import '../styles/style.css'









const PokemonImage = styled.img`
height: 200px;
width: 200px;
position: absolute;
top: 40px;
left: 10px;
`

const NameContainer = styled.div`
position:absolute;
left: 450px;
top 30px;
`

export default function PokemonList({ pokemon, loading, infoPokemon}) {
  return (
    <>
{    
  loading ? <h1>Loading..</h1> : 
 
pokemon.map((item) => {
  return(
    <>
    
    <div className='card' key={item.id}  onClick={()=>infoPokemon(item)}>
      <h2>{item.id}</h2>
       <img src={item.sprites.front_default} alt='' /> 
      <h2>{item.name}</h2>
      </div>
      
    </>  
    )
      })
    }   
    </>
  )
}


