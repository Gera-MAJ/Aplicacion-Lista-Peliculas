
export const GuardarEnStorage = (key, dato) => {
  //Obtener los datos del local storage
  let datos = JSON.parse(localStorage.getItem(key))

  //Comprobar si datos es un array
  Array.isArray(datos) ? datos.push(dato) : datos = [dato];

  //Guardar en el local storage
  localStorage.setItem(key, JSON.stringify(datos))

  console.log(datos)

  //Devolver la variable pelicula
  return dato
}

