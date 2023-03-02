import React from 'react'
import axios from 'axios'

export default function About({data}) {

  return (
    
    <div className='about-card'>
      <div className='about-name'>Height:</div> <div className='about-stat'>{`(${data.height/10})`}</div>
      <div className ='about-name'>Weight:</div><div className='about-stat'>{data.weight}</div>
      <div className = 'ability-name'>Abilities:</div>
    {
      data.abilities.map(abilities=><div className='ability-name-stat'>{abilities.ability.name}</div>)
      
    }
    </div>
    
  
  
  )
}
