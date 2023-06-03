import { Link } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
  const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext);


  if(cantidadTotal === 0) {
      return (
          <>
              <h2>No hay productos en el carrito </h2>
              <Link to='/'> Seguir Comprando </Link>
          </>
      )
  }

return (
  <div>
      {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
      <h4> Cantidad Total: {cantidadTotal} </h4>
      <h4> Total: $ {total}  </h4>
      <button className="ButtonCarrito" onClick={()=> vaciarCarrito()}> Vaciar Carrito </button>
      <Link className="ButtonCarrito" to="/Checkout1"> Finalizar Compra </Link>
  </div>
)
}

export default Cart
