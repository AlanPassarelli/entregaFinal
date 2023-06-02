import { useState } from "react";
import "./ItemCount.css"
const ItemCount = ({inicial, stock, funcionAgregar}) => {
  const [contador, setContador] = useState(inicial);

  const incrementar = () => {
      if(contador < stock) {
          setContador(contador + 1);
      }
  }

  const decrementar = () => {
      if(contador > inicial){
          setContador(contador - 1);
      }
  }

return (
  <div className="Counter">
      <div className="Controls">
          <button className='Button' onClick={ decrementar }> - </button>
          <p> {contador} </p>
          <button className='Button'  onClick={ incrementar }> + </button>
      </div>
      <div className="Controls">
      <button  className='ButtonAgregar' onClick={() => funcionAgregar(contador)}> Agregar al Carrito </button>
      </div>
    
  </div>
)
}


export default ItemCount
