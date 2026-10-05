import ListaEnvios from "./ListaEnvios";

function App() {
  return (
    <div>
      <h1>Sistema ZIYU</h1>
      <ListaEnvios cliente="ZIYU" destino="San Antonio" estado="Pendiente" />
      <ListaEnvios cliente="RamcoLog" destino="Lirquen" estado="Entregado" />
    </div>
  );
}

export default App;
