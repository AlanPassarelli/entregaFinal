import { useState, useEffect, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../Services/Services"
import { collection, addDoc } from "firebase/firestore"

const checkout = () => {
    const {carrito, VaciarCarrito} = useContext (CarritoContext);
    const [nombre, setNombre] =useState ("");
    const [aperllido, setApellido] =useState ("");
    const [telefono, setTelefono] =useState ("");
    const [email, setEmail] =useState ("");
    const [emailConfirmacion, setEmailConfirmacion] =useState ("");
  return (
    <div>
      
    </div>
  )
}

export default checkout
