import React from 'react'

const Editar = ({Peliculas, ListaPeliculas, setListaPeliculas, setEditar}) => {

  const actualizarPeli = (e, id) => {
    e.preventDefault()

    //Guardar los datos del target en una variable
    const datos = e.target

    //Ahora recivo el id de la película para editar y lo tengo que almacenar

    const idParaActualizar = id

    //Debería encontrar los campos para actualizar dentro del array que tiene todas las películas y encontra el index del array

    const index = ListaPeliculas.findIndex(element => element.id === idParaActualizar)

    //Ahora voy a cargar los datos de la película editada

    const peliculaEditada = {
      id: idParaActualizar,
      titulo: datos.titulo.value,
      descripcion: datos.descripcion.value
    }
    
    //Ahora debería reemplazar la película editada en la lista de todas las películas, para esto copio la lista de peliculas

    const peliculas = ListaPeliculas

    //ahora debo cambiar el valor de la lista editada.

    peliculas[index] = peliculaEditada

    //Ahora mando todas las películas con la nueva editada para que se actualice
    
    setListaPeliculas(peliculas)

    //Por último, tengo que actulizar el localstorage

    localStorage.setItem("pelis", JSON.stringify(peliculas))

    //Ahora hago que el formulario mande una señal para que desaparezca, como editar al estar en valor cero, no se abre, le regreso ese valor y el formulario se cierra

    setEditar(0)

    // console.log(datos, id, ListaPeliculas, index, peliculaEditada, peliculas)
  }  

  return (
    <div className='editar'>
      <form className='formulario' action='submit' onSubmit={e => actualizarPeli(e, Peliculas.id)}>
        <input type="text" 
               placeholder={Peliculas.titulo} 
               name='titulo'/>
        <textarea name="descripcion" 
                  placeholder={Peliculas.descripcion}>
        </textarea>
        <input type="submit" name='actualizar'  value="Actualizar"/>
      </form> 
    </div>
  )
}

export default Editar