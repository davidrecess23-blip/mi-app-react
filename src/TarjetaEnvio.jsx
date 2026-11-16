function TarjetaEnvio(props) {
  return (
    <div>
      <p>Nombre: {props.nombre}</p>
      <p>Telefono: {props.telefono}</p>
      <p>Email: {props.email}</p>
      <p>Ciudad: {props.ciudad}</p>
      <hr />
    </div>
  );
}

export default TarjetaEnvio;
