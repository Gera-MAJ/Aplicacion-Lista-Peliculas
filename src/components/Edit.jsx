import React from 'react'

const Editar = ({Peliculas}) => {

  const actualizarPeli = e =>{
    e.preventDefault()

    //Guardar los datos del target en una variable
    const datos = e.target
    
    console.log(datos)
  }  

  return (
    <div className='editar'>
      <form className='formulario' action='submit' onSubmit={actualizarPeli}>
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