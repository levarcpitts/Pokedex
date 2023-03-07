import React from 'react'
import '../styles/style.css'
const { getColor } = require('../helpers');


export default function PokemonStats({data}) {
    
  return (
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
  )
}
