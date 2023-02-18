import React, { useState } from 'react'
import  Modal  from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import '../styles/style.css'

export default function PokemonPage({data, show, handleClose}) {
  

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
              onHide={()=>{}} 
              backdrop='static'
              keyboard={false} 
            >
              <div className='whole-modal'>
              <div className='modal_pop_out'  style={{backgroundColor: `${getColor(data)}`}}>
              <div onClick={handleClose} className='back-button-container'>x</div>
                <div className='pokemon-name'>{data.name}</div>
                <div className='pokemon-number' style={{color: `${getColor(data)}`}}>{data.id}</div>
                <div className='type-container'>
                {data.types.map(type=>{
                  return(
                    <div className='type_button_card' style={{color: `${getColor(data)}`}}>{type.type.name}</div>
                  )
                } )}
               </div>
                <div className='stat-card'>   
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/
other/dream-world/${data.id}.svg`} alt="" className='main-pic'/>
                   {
                        data.stats.map(poke=>{
                            return(
                                <>
                                    <h3>{poke.stat.name}:{poke.base_stat}</h3>
                                </>
                            )
                        })
                    }
               
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
