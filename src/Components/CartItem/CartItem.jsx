import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"


const CartItem = ({item, cantidad}) => {

    const {eliminarProducto} = useContext (CarritoContext);


  return (
    <div className="fondoCart2"> 

        <h4> {item.nombre} </h4>
        <p> Cantidad: {cantidad} </p>
        <img src={item.img} />
        <p> Precio: $ {item.precio}</p>

        <div>
        <button className="ButtonCarrito3" onClick={() => eliminarProducto (item.id)}> Eliminar </button>
        </div>

        
    </div>
  )
}

export default CartItem
