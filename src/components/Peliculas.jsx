
import React, { useEffect, useState }from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage'
import Editar from '../components/Edit'

export const Peliculas = ({listaPeliculas, setListaPeliculas}) => {

  // const [peliculas, setPeliculas] = useState([])
  const [editar, setEditar] = useState(0)
  // Agrego está bandera para hacer que el formulario se cierre cuando cambia
  

  useEffect(() => {
    if(JSON.parse(localStorage.getItem("pelis")) != null){

      // setListaPeliculas(JSON.parse(localStorage.getItem("pelis"))) 

      conseguirLista();
    }
  }, [])

  const conseguirLista = () => {
    let peliculasListadas = JSON.parse(localStorage.getItem("pelis"));

    setListaPeliculas(peliculasListadas)

    return Peliculas
  }

  function borrarPelicula(id){
    console.log(id)
    //Lo que hago acá es del array listaPeliculas, filtro cada uno de sus valores y solo saco el dato que se iguala al id que trae la funcion. Por eso uso el !==, para que todos los que son distintos sean filtrados
    const datoFiltrado = listaPeliculas.filter((objeto) => objeto.id !== id)

    console.log(datoFiltrado)

    setListaPeliculas(datoFiltrado)

    //De esta manera, guardo todo el array filtrado en el locastorage
    localStorage.setItem("pelis", JSON.stringify(datoFiltrado))
  }

  if(listaPeliculas.length > 0 ) {
    return (
      <section className="peliculas">
              {/* aca van las películas */}
  
              {listaPeliculas.map(peli => (
                  <article className="peli-item" key={peli.id}>
                      <h3 className="Title2">{peli.titulo}</h3>
                      <p className="description">{peli.descripcion}</p>
  
                      <div className="botones">
                          <button className="edit" onClick={()=>{setEditar(peli.id)}}>Editar</button>
                        <button className="delete" onClick={() =>borrarPelicula(peli.id)}>Borrar</button>
                      </div>

                      {/* // Acá tiene que aparecer lo que necesito para colocar la edición debajo del campo que estoy editando */}
                      {(editar === peli.id) && <Editar Peliculas={peli} ListaPeliculas ={listaPeliculas} setListaPeliculas = {setListaPeliculas} setEditar = {setEditar}/>}
                  </article>

                  
                  
              ))}
              
          </section>
    )
  }else{
    return <h2>No hay datos</h2>
  }
  
  
}

export default Peliculas;