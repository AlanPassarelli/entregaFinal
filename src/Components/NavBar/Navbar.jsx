import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link  } from 'react-router-dom'
const Navbar = () => {
  return (
    <header>
    
    <Link to={"/"}>
    
    <img className='Logo'  src="../Imagenes/Logo tablet game con fondo.jpg" alt="logo" />
    
    </Link>
   

    <ul>
        <li>
          <NavLink className= "letra" to={`/categoria/1`} > MALDOM </NavLink>
        </li>
        <li>
        <NavLink className= "letra"  to={`/categoria/2`} > BUREAU DE JUEGOS</NavLink>
        </li>
        <li>
        <NavLink className= "letra" to={`/categoria/3`} > DEVIR </NavLink>
        </li>

    </ul>

   <CartWidget/>
    </header>
  )
}

export default Navbar
