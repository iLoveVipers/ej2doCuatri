import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'


export default function Layout() {
  const {theme, setTheme} = useContext(ThemeContext)

  const cambiarFondo = () => {
    let nuevoFondo ='blue'
    if (theme === 'blue') nuevoFondo = 'white'
    setTheme(nuevoFondo)
  }

    return (
        <>
        <nav>
        <Link to='/'>Home  </Link>
        
        <Link to='/instrucciones'>  Instrucciones</Link>
    </nav>
    <Outlet />
    <footer>
        Click para cambiar el fondo
        <button onClick={cambiarFondo}>Cambiar fondo</button>
      </footer>
   
  </>
)
    
}
