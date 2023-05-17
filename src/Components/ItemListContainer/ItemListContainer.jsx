import { useState, useEffect } from 'react'
import { getProductos, getUnProductoPorCategoria } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} =useParams (); 

    useEffect(() => {

        const funcionProductos = idCategoria ? getUnProductoPorCategoria : getProductos;

        funcionProductos (idCategoria)

        .then (res => setProductos (res))
        .catch(error => console.error(error))

    }, [idCategoria])

    return (
        <div>
            <h2 className='titulo'>Bienvenidos a The Table Game</h2>
            <ItemList productos={productos} />
        </div>
    )
}
export default ItemListContainer
