import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

export const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        };
        console.log(pedido);
   
        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido) 
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })
    };

    if (pedidoId) {
        return (
            <div className="container">
                <h1 className="main-title">Muchas gracias por su compra</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        );
    }

  return (
    <div className='container'>
        <h1 className='main-title'>Finalizar compra</h1>
        <form className='formulario' onSubmit={handleSubmit(comprar)} >
            <input
                type="text"
                placeholder='Ingresa tu nombre'
                {...register("nombre", { required: "Este campo es obligatorio" })}
            />
            {errors.nombre && <p>{errors.nombre.message}</p>}

            <input
                type="email"
                placeholder='Ingresa tu email'
                {...register("email", { required: "Este campo es obligatorio" })}
            />
            {errors.email && <p>{errors.email.message}</p>}

            <input
                type="phone"
                placeholder='Ingresa tu telefono'
                {...register("telefono", { required: "Este campo es obligatorio" })}
            />
            {errors.telefono && <p>{errors.telefono.message}</p>}

            <button
                className='enviar'
                type='submit'
                disabled={Object.keys(errors).length > 0} // Deshabilitar si hay errores
            >
                Comprar
            </button>
        </form>
    </div>
  );
};

