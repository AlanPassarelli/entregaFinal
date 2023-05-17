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
          <NavLink to={`/categoria/1`} className= "letra"> MALDOM </NavLink>
        </li>
        <li>
        <NavLink to={`/categoria/2`} className= "letra"> BER </NavLink>
        </li>
        <li>
        <NavLink to={`/categoria/3`} className= "letra"> DELIV </NavLink>
        </li>

    </ul>

   <CartWidget/>
    </header>
  )
}

export default Navbar
