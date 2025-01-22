import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ( {producto} ) => {
    
  return (
    <div className='producto'>
        <img src={producto.imagen} alt={producto.titulo} />
        <div>
            <h4>{producto.titulo}</h4>
            <p>Precio: ${producto.precio}</p>
            <p>Categoria: {producto.categoria}</p>
            {/* <a className='ver-mas' href={`/item/${producto.id}`}>Ver más</a> */}
            <Link className='ver-mas' to={`/item/${producto.id}`}>Ver más</Link>
        </div>

    </div>
  )
}

