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
      <p>Envios cargados: {envios.length}</p>
    </div>
  );
}

export default App;
