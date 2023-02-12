import React from 'react'

export default function PokemonPage({data}) {
  console.log(data)
  return (
    <>
    {
      (!data)?"":(
        <>
        <h1>Harry</h1>
        </>
      )
    }
    </>
  )
}
