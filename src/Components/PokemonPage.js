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
const { getColor } = require('../helpers');







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
