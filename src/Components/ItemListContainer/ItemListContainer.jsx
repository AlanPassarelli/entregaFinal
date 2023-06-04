import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import { db } from '../../Services/Services'
import { collection, getDocs, where, query } from 'firebase/firestore'


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} =useParams (); 

    useEffect ( ()=> {

        const misProductos = idCategoria ? query(collection (db, "productos"), where ("idCat", "==", idCategoria)) : collection (db, "productos");

        getDocs (misProductos)
        .then(res => {
            const nuevosProductos = res.docs.map (doc => {
                const data = doc.data ()
                return {id:doc.id, ...data}
            })
            setProductos (nuevosProductos);
        })
    }, [idCategoria])


    return (
        <div>
            <h2 className='titulo'>Bienvenidos a The Table Game</h2>
            <ItemList productos={productos} />
        </div>
    )
}
export default ItemListContainer
