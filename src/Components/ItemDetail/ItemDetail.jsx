import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedorItem'>
        <h2>{nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3> ID: {id} </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae perferendis et possimus, veritatis fugiat dolores nam reiciendis distinctio quasi voluptate voluptatibus id repellendus. Itaque ut a cumque sapiente ad magnam?</p>
        <img src={img} alt={nombre} />
        <ItemCount  initial={1} stock={10} onAdd={(quantity) => console.log ("cantidad agregada", quantity)}></ItemCount>
        <button className="ButtonCarrito">Agregar al Carrito</button>
       
    </div>
  )
}


export default ItemDetail