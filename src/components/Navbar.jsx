import React from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from './CartWidget'
import logo from '../img/logourbanfit.png';

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to="/" className='logo'>
            <img src={logo} alt="Logo" />
        </Link>
        <ul className='menu'>           
            <li><Link className='menu-link' to="/">Inicio</Link></li> 
            <li><Link className='menu-link' to="/productos">Productos</Link></li>
            <li><Link className='menu-link' to="/productos/medias">Medias</Link></li>
            <li><Link className='menu-link' to="/productos/pantalones">Pantalones</Link></li>
            <li><Link className='menu-link' to="/productos/remeras">Remeras</Link></li>
            <li><Link className='menu-link' to="/productos/buzos">Buzos</Link></li>
        </ul>
        <CartWidget />
    </nav>
  )
}

