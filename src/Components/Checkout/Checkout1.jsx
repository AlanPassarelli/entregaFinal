import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../Services/Services";
import { collection, addDoc } from "firebase/firestore";
import "./Checkout.css";

const Checkout1 = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfimarcion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const manejadorSubmit = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfimarcion) {
      setError("Por favor complete los campos");
      return;
    }

    if (email !== emailConfimarcion) {
      setError("Los campos del email no coinciden");
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: carrito.reduce(
        (total, producto) => total + producto.item.precio * producto.cantidad,
        0
      ),
      nombre,
      apellido,
      telefono,
      email,
    };

    addDoc(collection(db, "ordenes"), orden).then((docRef) => {
      setOrdenId(docRef.id);
      vaciarCarrito();
    });
  };
  return (
    <div className="fondo">
      <h2>Finaliza tu orden</h2>
      <form onSubmit={manejadorSubmit} className="formulario">
        {carrito.map((producto) => (
          <div key={producto.item.id}>
            <div className="totales">
              <p>
                {" "}
                {producto.item.nombre} x {producto.cantidad}{" "}
              </p>
              <p>Precio: $ {producto.item.precio} </p>
            </div>

            <hr />
          </div>
        ))}

        <div className="totales">
          <h4> Cantidad Total: {cantidadTotal} </h4>
          <h4> Total: $ {total} </h4>
        </div>
        <hr />

        <div className="form-group">
          <label htmlFor=""> Nombre </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor=""> Apellido </label>
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor=""> Telefono</label>
          <input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor=""> Email </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor=""> Email Confirmación </label>
          <input
            type="email"
            value={emailConfimarcion}
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          />
        </div>

        {error && <p style={{ color: "aliceblue" }}> {error} </p>}

        <div className="contenedorButton">
          <button className="ButtonCarrito2" type="submit">
            {" "}
            Finalizar Orden{" "}
          </button>
        </div>

        {ordenId && (
          <strong className="orderId">
            ¡Gracias por tu compra! Tu número de orden es: {ordenId}{" "}
          </strong>
        )}
      </form>
    </div>
  );
};

export default Checkout1;
