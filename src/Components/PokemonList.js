import React from 'react'
import '../styles/style.css'
const { getColor } = require('../helpers');



export default function PokemonList({ pokemon, loading, infoPokemon}) {

 

  return (
    <>
    {
        loading ? <h1>Loading...</h1> : 
            pokemon.map((item) => {  
                return (
                    <>
                        <div key={item.id} onClick={()=>infoPokemon(item)} className='list_label' style={{backgroundColor: `${getColor(item)}`}}>
                          
                            <div className='list_label_left'>
                            <div className ='list_name'>{item.name}</div>
                              { 
                                item.types.map(type =>{return(<div className='type_button' style={{color: `${getColor(item)}`}}>{type.type.name}</div>)})
                              }</div>
                          
                            <div className='list_label_right'>
                            <div className='list_number' style={{color: `${getColor(item)}`}}>{item.id}</div>
                            <img className='page_picture' src={item.sprites.other.dream_world.front_default} alt="" />
                            </div>
                            </div>
                        
                    </>
                )
            })
    }

    </>
) 
}



