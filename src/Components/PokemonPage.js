import React, { useState } from 'react'
import  Modal  from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import '../styles/style.css'

export default function PokemonPage({data, show, handleClose}) {
  

 const getColor=(type)=>{  
  let color = '';          
  if (type === 'grass'){
    color = '#7AC74C'
  } else if ( type === 'fire'){
    color = '#EE8130'
  } else if (type ==='water'){
    color = '#6390F0'
  } else if (type === 'electric'){
    color = '#F7D02C'
  } else if (type === 'normal'){
    color = '#A8A77A'
  } else if (type === 'ice'){
    color = '#96D9D6'
  } else if (type === 'fighting'){
    color = '#C22E28'
  } else if (type === 'poison'){
    color = '#A33EA1'
  } else if (type === 'ground'){
    color = '#E2BF65'
  } else if (type === 'flying'){
    color = '#A98FF3'
  } else if (type === 'psychic'){
    color = '#F95587'
  } else if (type === 'bug'){
    color = '#A6B91A'
  } else if (type === 'rock'){
    color = '#B6A136'
  } else if (type === 'ghost'){
    color = '#735797'
  } else if (type === 'dragon'){
    color = '#6F35FC'
  } else if (type === 'dark'){
    color = '#705746'
  } else if (type === 'steel'){
    color = '#B7B7CE'
  } else if (type === 'fairy'){
    color = '#D685AD'
  }else{
    color = null
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
              <div className='modal_pop_out' >
                <h1>{data.name}</h1>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                <div className="abilities">
                    {
                        data.abilities.map(poke=>{
                            return(
                                <>
                                 <div className="group">
                                    <h2>{poke.ability.name}</h2>
                                </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className="base-stat">
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
                <Button variant="primary" onClick={handleClose}>X</Button>
                </div>
              </Modal>
            </>
        )
    }

    </>
)
}
