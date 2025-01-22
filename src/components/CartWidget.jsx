import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import 'font-awesome/css/font-awesome.min.css';

export const CartWidget = () => {
    const { cantidadEnCarrito } = useContext(CartContext);

    return (
        <div>
            <Link className='menu-link' to="/carrito">
                <i className="fa fa-shopping-cart"></i>
                <span className='numerito'> {cantidadEnCarrito()}</span>
            </Link>
        </div>
    );
};
