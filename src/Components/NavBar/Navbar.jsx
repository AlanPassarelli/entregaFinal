import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
const Navbar = () => {
  return (
    <header>
    <h1 style={{color:"grey"}}>The Table Game</h1>
    <ul>
        <li>Juegos</li>
        <li>Locación</li>
        <li>Contacto</li>

    </ul>

   <CartWidget/>
    </header>
  )
}

export default Navbar
