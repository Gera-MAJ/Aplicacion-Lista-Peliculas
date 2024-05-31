import React, { useEffect, useState } from 'react'

const Search = ({listaPeliculas, setListaPeliculas}) => {

  const [buscar, setBuscar] = useState("")

    const peliBuscada = (e) =>{
      setBuscar(e.target.value)

      console.log(buscar, listaPeliculas)

    //Ahora tengo que encontrar dentro del array de las películas la considencia exacta
    //El return se usa cuando hay una función flecha dentro de una variable designada
      let pelicula_encontrada = listaPeliculas.filter(peli => {
        return peli.titulo.toLowerCase().includes(buscar.toLowerCase())
      })

      //Se pone pelicula_encontrada con 0, porque en la función anterior, si no hay considencia en el filter, devuelve 0 y entonces pasa a cargar el localStorage
      if(buscar.length <= 1 || pelicula_encontrada <= 0){
        pelicula_encontrada = JSON.parse(localStorage.getItem("pelis"))
      }
      
      setListaPeliculas(pelicula_encontrada)
    
    }
    

    
  

  return (
    <div className="search">
       <h3 className="Title2">Buscador: {buscar}</h3>
        <form>
            <input 
                type="text" 
                className="buscador"
                name='buscador'
                value={buscar}
                onChange={peliBuscada}/>
            <button className="boton-buscar">Buscar</button>
        </form>
    </div> 
  )
}

export default Search
