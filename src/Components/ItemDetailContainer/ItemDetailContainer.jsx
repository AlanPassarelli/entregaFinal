import { useState,useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../Services/Services";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);

  const { idItem } = useParams();

  useEffect(() => {
    const nuevoDoc = doc (db, "productos", idItem);

    getDoc (nuevoDoc)
    .then (res => {
      const data = res.data ();
      const nuevosProductos = {id: res.id, ...data};
      setProducto (nuevosProductos);
    })
    .catch (error => console.log (error))

  }, [idItem])

  return (
    <div>
      <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer
