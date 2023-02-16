import React from 'react'
import '../styles/style.css'


export default function PokemonList({ pokemon, loading, infoPokemon}) {

 

  return (
    <>
    {
        loading ? <h1>Loading...</h1> : 
            pokemon.map((item) => {
          
              const type = item.types[0].type.name;
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
                return (
                    <>
                        <div key={item.id} onClick={()=>infoPokemon(item)} className='list_label' style={{backgroundColor: `${color}`}}>
                          
                            <div className='list_label_left'>
                            <h4>{item.name}</h4>
                            <div className='type_button' style={{color: `${color}`}}>{type}</div>
                            </div>
                            <div className='list_label_right'>
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



