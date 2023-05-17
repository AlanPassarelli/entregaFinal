import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link  } from 'react-router-dom'
const Navbar = () => {
  return (
    <header>
    
    <Link to={"/"}>
    
    <h1 style={{color:"grey"}}>The Table Game</h1>
    
    </Link>
   

    <ul>
        <li>
          <NavLink to={`/categoria/1`}> MALDOM </NavLink>
        </li>
        <li>
        <NavLink to={`/categoria/2`}> BER </NavLink>
        </li>
        <li>
        <NavLink to={`/categoria/3`}> DELIV </NavLink>
        </li>

    </ul>

   <CartWidget/>
    </header>
  )
}

export default Navbar
