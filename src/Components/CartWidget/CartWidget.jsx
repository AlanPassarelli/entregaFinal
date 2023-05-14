import './CartWidget.css'
const CartWidget = () => {
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png"
  return (
  <div>
    <img className ='imgCarrito' src= {imgCarrito} alt='carrito'/>
    <strong> 2 </strong>
  </div>
  )
}

export default CartWidget
