import { useEffect, useRef, useState } from 'react'
import React from 'react';
import './Tarea.css'

export default function Tarea() {

    const [listaTareas, setListaTareas] = useState([])
    const [contador, setContador] = useState(0)
    const inputRef = useRef()

    useEffect(() => {
        document.title = contador
    }, [contador])

    useEffect(() => {
        setContador(listaTareas.length)
        localStorage.setItem('listaTareas', JSON.stringify(listaTareas))
    }, [listaTareas])

    const handleClick = () => {
        let tarea = inputRef.current.value
        setListaTareas([...listaTareas, tarea])
    }

    return (
        <article>
            <input type="text" ref={inputRef} />

            <button onClick={handleClick}>Agregar</button>
            <div className='lista-tareas'>
                {
                    listaTareas.map((texto, index) => (
                            //el input type checkbox me tiraba error
                                <p key={index} className='texto'>{texto}</p>
                            
                            ))
                }
            </div>
        </article>
    )
}
