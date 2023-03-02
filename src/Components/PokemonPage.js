import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import '../styles/style.css'
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route,
  RouterProvider
} from 'react-router-dom'

import PokemonStats from './PokemonStats'
import Evolutions from './Evolutions'
import About from './About'






export default function PokemonPage({data, show, handleClose}) {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route >
        <Route  element={<PokemonStats data={data}/>} />
        <Route  element={<Evolutions data={data}/>}/>
        <Route index element={<About data={data}/>}/>
      </Route>
    )
  )

  if(!show){
    return null
  }

const getColor=(item)=> {
  switch(data.types[0].type.name) {
          case 'grass':
            return '#7AC74C'
          case 'fire':
            return '#EE8130'   
          case 'water':
            return '#6390F0'
          case 'electric': 
            return  '#F7D02C'
          case 'normal':
            return '#A8A77A'
          case 'ice':
            return '#96D9D6'
          case 'fighting':
            return '#C22E28'
          case 'poison':
            return '#A33EA1'
          case 'ground':
            return '#E2BF65'
          case 'flying':
            return '#A98FF3'
          case 'psychic':
            return '#F95587'
          case 'bug':
            return '#A6B91A'
          case 'rock':
            return '#B6A136'
          case 'ghost':
            return '#735797'
          case 'dragon':
            return '#6F35FC'
          case 'dark':
            return '#705746'
          case 'steel':
            return '#B7B7CE'
          case 'fairy':
              return '#D685AD'
          default:
            return null 
  }
}
  

  return (
    <>
    { 
        (!data) ? "" : (
            <>
            <Modal 
              show={show} 
              onHide={handleClose} 
              backdrop='true'
              keyboard={false} 
              animation={true}
            >
              <div className='modal-header'>
              <div className='pokemon-name' style={{backgroundColor: `${getColor(data)}`}}>{data.name}</div>
              </div>
              <div className='whole-modal'>
              <div className='modal_pop_out'  style={{backgroundColor: `${getColor(data)}`}}>
                <div className='type-container'>
                {data.types.map(type=>{
                  return(
                    <div className='type_button_card' style={{color: `${getColor(data)}`}}>{type.type.name}</div>
                  )
                } )}
                <div className='pokemon-number' style={{color: `${getColor(data)}`}}>{data.id}</div>
               </div>
                <div className='stat-card'>   
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/
other/dream-world/${data.id}.svg`} alt="" className='main-pic'/>
<RouterProvider router={router} data={data}/>
                </div>
                </div>
                </div> 
              </Modal>
            </>
        )
    }
    </>
)
}
