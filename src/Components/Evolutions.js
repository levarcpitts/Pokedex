import React from 'react'
import axios from 'axios'

export default function Evolutions({data}) {

    const getForms=async()=>{
    const res = await axios.get(`https://pokeapi.co/api/v2/evolution-chain/1/`);
    console.log(res.data.chain.evolves_to[0].species)
    console.log(res.data.chain.evolves_to[0].evolves_to[0].species)
    }
    

    getForms()
  return (
    <div className='stat-div'>
        
    </div>
  )
}
