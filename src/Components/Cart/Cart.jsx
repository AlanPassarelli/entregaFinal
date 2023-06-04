import { Link } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import CartItem from "../CartItem/CartItem"
import './Cart.css'

const Cart = () => {
  const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext);


  if(cantidadTotal === 0) {
      return (
          <>
          <div className="fondoCart">
          <h2>No hay productos en el carrito </h2>
          <Link className="ButtonCarrito3" to='/'> Seguir Comprando </Link>
          </div>

          </>
      )
  }

return (
  <div className="fondoCart">
      {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
      <h4> Cantidad Total: {cantidadTotal} </h4>
      <h4> Total: $ {total}  </h4>
      <button className="ButtonCarrito3" onClick={()=> vaciarCarrito()}> Vaciar Carrito </button>
      <Link className="ButtonCarrito3" to="/Checkout1"> Finalizar Compra </Link>
      <Link className="ButtonCarrito3" to='/'> Seguir Comprando </Link>
  </div>
)
}

export default Cart
