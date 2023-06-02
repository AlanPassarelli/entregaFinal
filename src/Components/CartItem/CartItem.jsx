import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import Item from "../Item/Item";

const CartItem = (item, cantidad) => {

    const {eliminarProducto} = useContext (CarritoContext);


  return (
    <div> 

        <h4> {Item.nombre} </h4>
        <p> Cantidad: {cantidad} </p>
        <p> Precio: $ {Item.precio}</p>
        <button onClick={() => eliminarProducto (item.id)}> Eliminar </button>
        
    </div>
  )
}

export default CartItem
