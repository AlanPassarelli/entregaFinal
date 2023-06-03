import './CartWidget.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);

  const imgCarrito = "https://www.pinclipart.com/picdir/big/41-410185_cart-plus-comments-carrito-de-compras-jpg-clipart.png"; 

  return (
    <Link to='/cart'>
      <img className='imgCarrito' src={imgCarrito} alt="Carrito de Compras" />
      {
      cantidadTotal > 0 && <strong className='itemsIndicador'> {cantidadTotal} </strong>
      }
    </Link>
  )
}
export default CartWidget
