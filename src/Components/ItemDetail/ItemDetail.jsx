import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock, detalle }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);


  const {agregarProducto} = useContext(CarritoContext);



  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);



    const item = {id, nombre, precio, img}; 
    agregarProducto(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
      <h2>Nombre: {nombre} </h2>
      <h3>Precio $: {precio} </h3>
      <h3>ID: {id} </h3>
      <p> {detalle} </p>
      <img src={img} alt={nombre} />
      <div>      
        {agregarCantidad > 0 ? (<Link className='ButtonCarrito3' to="/cart"> Terminar Compra </Link>) : (< ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)}  
        <Link className="ButtonCarrito3" to='/'> Seguir Comprando </Link>
      </div>

    </div>
  )
}


export default ItemDetail