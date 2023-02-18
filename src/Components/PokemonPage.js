import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import '../styles/style.css'
import { ModalFooter } from 'react-bootstrap';

export default function PokemonPage({data, show, handleClose}) {

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
              <div className='pokemon-name' style={{color: `${getColor(data)}`}}>{data.name}</div>
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
<div className='stat-div'>
                   {
                        data.stats.map(poke=>{
                            return(
                                <>
                                    <div className='pokemon-stats'>
                                      <div className='stat-name'  style={{backgroundColor: `${getColor(data)}`}}>
                                      {poke.stat.name}
                                      </div>
                                      <div className='guage-background'  style={{backgroundColor: `${getColor(data)}`}}>
                                        <div className='guage' style={{width: `${poke.base_stat * 1.1}px`}}/>
                                      </div>
                                      <div className='stat-number' style={{backgroundColor: `${getColor(data)}`}}>
                                      {poke.base_stat}
                                      </div>
                                    </div>
                                </>
                            )
                        })
                    }
               </div>
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
