import React, { useState } from 'react'
import  Modal  from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import '../styles/style.css'

export default function PokemonPage({data, show, handleClose}) {

 

  //const handleShow = () => setShow(true);

  console.log(handleClose)

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
            <Button variant="primary" onClick={handleClose}>X</Button>
            <div>
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
                </div>
              </Modal>
            </>
        )
    }

    </>
)
}
