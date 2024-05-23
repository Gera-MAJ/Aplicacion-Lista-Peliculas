import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage'

const Add = ({setListaPeliculas}) => {

  const [pelicula, setPelicula] = useState({
    id: "",
    titulo: "",
    descripcion: ""
  })
  
  const cargarDatos = e =>{

    e.preventDefault()
    
    const datosCargados = e.target
    

    const peli = {
      id: new Date().getTime(),
      titulo: datosCargados.titulo.value,
      descripcion: datosCargados.descripcion.value
    }

    setPelicula({
      id: peli.id,
      titulo: peli.titulo,
      descripcion: peli.descripcion
    })
    
    

    GuardarEnStorage("pelis", peli)

    // Actualizar el estado padre de la lista de películas, tambien podemos ver como agregar el valor para un array de objetos que ya tiene valores. 
    setListaPeliculas(elementos => {
      
        return [...elementos, peli]
      
      
    
    })
    

  }

  
  
  
  
  return (
    <div className="add">
        <h3 className="Title2">Añadir Película</h3>
        {/* Cuando queremos que al cumplir una condicion aparezca algo, usamos el && y luego lo que queremos que aparezca, como se muestra abajo */}
        {pelicula.titulo.length > 0 && <h4>Añadiste la película: {pelicula.titulo}</h4>}
        {/* Esta es una forma de condicion, pero que no aparece nada cuando se cumple */}
        {pelicula.titulo.length > 2 ? <h4>Es buen título</h4> : <h4></h4>}
        
            <form className="formulario" onSubmit={cargarDatos} action='submit'>
                <input type="text" placeholder="Título" name="titulo"/>
                <textarea placeholder="Descripción" name="descripcion"></textarea>
                <input type="submit" value="Enviar" name="enviar"/>
            </form>
    </div>
  )
}

export default Add