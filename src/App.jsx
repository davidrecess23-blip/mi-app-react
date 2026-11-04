import { useState, useEffect } from "react";

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
        <div key={envio.id}>
          <p>Nombre: {envio.name}</p>
          <p>Phone: {envio.phone}</p>
          <p>Email: {envio.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
