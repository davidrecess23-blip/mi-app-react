import { useState, useEffect } from "react";
import TarjetaEnvio from "./TarjetaEnvio";

function App() {
  const [envios, setEnvios] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respuesta) => respuesta.json())
      .then((datos) => setEnvios(datos));
  }, []);

  return (
    <div>
      <h1>Sistema ZIYU</h1>
      {envios.map((envio) => (
        <TarjetaEnvio
          key={envio.id}
          nombre={envio.name}
          telefono={envio.phone}
          email={envio.email}
          ciudad={envio.address.city}
        />
      ))}
    </div>
  );
}

export default App;
