function ListaEnvios(props) {
  return (
    <div>
      <h2>Lista de Envios</h2>
      <p>Cliente: {props.cliente}</p>
      <p>Destino: {props.destino}</p>
      <p>Estado: {props.estado}</p>
    </div>
  );
}

export default ListaEnvios;
