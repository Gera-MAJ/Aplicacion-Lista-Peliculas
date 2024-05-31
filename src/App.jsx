import { useState } from 'react'
import './App.css'
import Add from './components/Add'
import Peliculas from './components/Peliculas'
import Search from './components/Search'


function App() {


  const [listaPeliculas, setListaPeliculas] = useState({})

  return (
    <>
      <div className="contenidoPrincipal">
          <div className="header">
            <div className="conteiner-logo">
                <div className="logo">
                    <div className="marca"></div>
                </div>
                <h2 className="Title1">Mis Películas</h2>
            </div>
            
            <nav className="nav">
                <ul className="lista">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Películas</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>   
        </div>

        <Peliculas listaPeliculas = {listaPeliculas} setListaPeliculas = {setListaPeliculas}/>

        
        <aside className="lateral">

            <Search listaPeliculas = {listaPeliculas} setListaPeliculas = {setListaPeliculas}/>  

            <Add setListaPeliculas = {setListaPeliculas} />
        
        </aside>
            
            
        
        {/* Pie de página */}
        <footer>
            &copy; Aplicación en JavaScript - <a href="#">Gerardo Jatip</a>
        </footer>
      </div>
      
    </>
  )
}

export default App
