import React from 'react'
import '../styles/style.css'


export default function PokemonList({ pokemon, loading, infoPokemon}) {

 

  return (
    <>
    {
        loading ? <h1>Loading...</h1> : 
            pokemon.map((item) => {
          
              
       const getColor=(item)=> {
      switch(item.types[0].type.name) {
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



