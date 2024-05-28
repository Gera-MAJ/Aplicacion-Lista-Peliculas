import React, { useState } from 'react'

const Search = () => {

  const [buscar, setBuscar] = useState('')

  const peliBuscada = (e) =>{
    setBuscar(e.target.value)
  }

  return (
    <div className="search">
       <h3 className="Title2">Buscador: {buscar}</h3>
        <form>
            <input 
                type="text" 
                className="buscador"
                name='buscador'
                onChange={peliBuscada}/>
            <button className="boton-buscar">Buscar</button>
        </form>
    </div> 
  )
}

export default Search
